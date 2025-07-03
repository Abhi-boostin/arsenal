"use client";
import React, { useEffect, useRef, useState } from "react";

interface GlitchTypewriterProps {
  text: string;
  speed?: number; // ms per character
  glitchRounds?: number; // how many glitch cycles per character
  className?: string;
}

const GLITCH_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?/|";

export const GlitchTypewriter: React.FC<GlitchTypewriterProps> = ({
  text,
  speed = 60,
  glitchRounds = 6,
  className = "",
}) => {
  const [displayed, setDisplayed] = useState<string>("");
  const [done, setDone] = useState(false);
  const iRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    let i = 0;
    let output = "";

    const typeNext = async () => {
      if (cancelled) return;
      if (i >= text.length) {
        setDone(true);
        return;
      }
      // Glitch rounds
      for (let g = 0; g < glitchRounds; g++) {
        if (cancelled) return;
        const glitch =
          output +
          GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        setDisplayed(glitch);
        await new Promise((res) => setTimeout(res, speed / 2));
      }
      output += text[i];
      setDisplayed(output);
      i++;
      iRef.current = i;
      setTimeout(typeNext, speed);
    };
    setDisplayed("");
    setDone(false);
    i = 0;
    output = "";
    typeNext();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, glitchRounds]);

  // Responsive styles for mobile
  // - font size and cursor size adjust based on screen width
  // - use inline style for cursor for max compatibility
  // - allow className override for further customizations

  return (
    <span
      className={
        "inline-block font-bold tracking-tight text-white relative " +
        className
      }
      aria-label={text}
      style={{
        fontSize: "clamp(1rem, 4vw, 2rem)", // Responsive font size
        wordBreak: "break-word",
        lineHeight: 1.2,
      }}
    >
      {displayed}
      <span
        className={`inline-block align-middle ml-0.5 bg-white/80 animate-pulse ${
          done ? "opacity-0" : "opacity-80"
        }`}
        style={{
          borderRadius: 2,
          verticalAlign: "middle",
          width: "clamp(0.25rem, 1vw, 0.5rem)", // Responsive width
          height: "clamp(1rem, 3vw, 1.25rem)", // Responsive height
          marginLeft: "0.125rem",
        }}
      />
    </span>
  );
};