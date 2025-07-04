import React from "react";
import { GlitchTypewriter } from "@/components/magicui/glitch-typewriter";

const projects = [
  { title: "Devouring Details", desc: "Remember your last moment of discovery?", year: 2025, skills: ["React", "TypeScript", "CSS"] },
  { title: "Vercel.com", desc: "The Vercel homepage", year: 2023, skills: ["Next.js", "TailwindCSS", "Vercel"] },
  { title: "Web Interface Guidelines", desc: "A list of details that make a good web interface", year: 2023, skills: ["HTML", "CSS", "UX"] },
  { title: "Vesper", desc: "Peppermint and orange flavored dark theme for VSCode", year: 2023, skills: ["VSCode", "Theme", "Design"] },
  { title: "(Basic) Bookmarks", desc: "A home for your internet discoveries", year: 2023, skills: ["React", "Firebase", "UI"] },
  { title: "⌘K", desc: "Fast, unstyled, composable command menu for React", year: 2022, skills: ["React", "Command Menu"] },
  { title: "uiwtf", desc: "An experimental laboratory for user interfaces", year: 2021, skills: ["UI", "React", "Experiment"] },
  { title: "Flow", desc: "Clear your mind through expressive writing", year: 2021, skills: ["Writing", "React"] },
  { title: "UI Playbook", desc: "The documented collection of UI components", year: 2020, skills: ["UI", "Documentation"] },
];

export default function Work() {
  return (
    <section className="w-full min-h-[600px] flex flex-col items-center justify-center bg-black py-0">
      <div className="w-full max-w-5xl min-h-[600px] flex flex-col items-start justify-center py-2 px-2 sm:px-4 md:px-8 box-border">
        <div className="mb-8 sm:mb-12 w-full">
          <h2 className="text-white text-[22px] xs:text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-tight break-words w-full">
            Featured Work
          </h2>
          <p className="mt-3 sm:mt-4 text-white/70 text-xs xs:text-sm sm:text-base font-medium tracking-wide uppercase max-w-full sm:max-w-md break-words">
            A SELECTION OF OUR MOST PASSIONATELY CRAFTED WORKS WITH FORWARD-THINKING CLIENTS AND FRIENDS OVER THE YEARS.
          </p>
        </div>
        <div className="w-full flex flex-col gap-3 sm:gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col gap-1 border-b border-white/10 pb-4 md:pb-2"
            >
              <div className="w-full flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 xs:gap-2">
                <div className="flex flex-col xs:flex-row xs:items-center xs:gap-2 w-full overflow-x-auto">
                  <span className="font-bold text-white text-base xs:text-lg sm:text-xl break-words max-w-full whitespace-pre-line">
                    <GlitchTypewriter text={project.title} />
                  </span>
                  <span className="text-white/70 text-xs xs:text-sm sm:text-base xs:ml-2 break-words max-w-full">
                    {project.desc}
                  </span>
                </div>
                <span className="text-white/50 text-xs xs:text-sm sm:text-lg min-w-[40px] text-right mt-1 xs:mt-0">
                  {project.year}
                </span>
              </div>
              <div className="flex flex-row flex-wrap gap-2 mt-1">
                {project.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="inline-flex items-center px-2 py-1 sm:px-3 rounded-md bg-white/5 text-white/80 text-xs font-medium border border-white/10 backdrop-blur-sm max-w-full truncate"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}