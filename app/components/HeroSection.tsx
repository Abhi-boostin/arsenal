export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[900px] bg-black overflow-hidden mt-0 pt-0">
      {/* Background gradient */}
      <div className="absolute left-1/2 top-0 w-[1120px] h-[820px] rounded-full opacity-100 [background:radial-gradient(50%_50%_at_50%_50%,_#ffffff_0%,_rgba(209,255,196,.61)_24.29%,_rgba(2,194,143,.48)_45%,_rgba(1,71,58,.45)_74.64%,_rgba(0,18,41,0)_100%)] [transform:translateX(-50%)_perspective(1200px)] [aspect-ratio:1.3658536585365855/1] [will-change:transform] z-0" />

      {/* Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-full flex flex-col items-center">
        <h1 className="text-white font-serif text-[22px] xs:text-[28px] sm:text-[40px] md:text-[64px] lg:text-[96px] font-normal leading-tight text-center drop-shadow-lg mt-12 xs:mt-16 sm:mt-32 px-2 break-words w-full">
          Let's make
          <br />
          <span>
            it <span className="italic">move.</span>
          </span>
        </h1>
      </div>

      {/* Main image (monitor) */}
      <div className="relative z-20 mt-[180px] sm:mt-[340px] flex flex-col items-center w-full">
        {/* Desktop/tablet image */}
        <img
          src="/images/computer.png"
          alt="Retro computer monitor"
          className="hidden sm:block"
        />
        {/* Mobile image */}
        <img
          src="/images/computer-mobile.png"
          alt="Retro computer monitor mobile"
          className="block sm:hidden w-[90vw] max-w-[340px] h-auto mx-auto mb-2"
        />
        {/* Optionally add camera and tape images here, positioned left/right */}
      </div>
      <div className="mt-1 sm:mt-4 w-full flex justify-center mb-8">
        <p className="text-white font-thin text-xs xs:text-sm sm:text-lg md:text-2xl text-center px-2 xs:px-4 w-full break-words leading-snug xs:leading-normal">
          Hey, I'm Abhimanyu Singh—
          <br />
          your friendly neighborhood designer, developer, and marketing "guy" based in India.
          <br />
          I've apparently worked on "countless" projects across every domain you can imagine, because who hasn't?
          <br />
          I've collaborated with clients, fulfilled their every wish (even the ones they didn't know they had), and built more marketing pipelines than I can remember.
          <br />
          Oh, and I launched an agency too—because why not?
          <br />
          I whip up fancy frontend UIs and, just for fun, handle the backend end-to-end.
          <br />
          Basically, if it's digital, I've probably done it… or at least Googled it.
        </p>
      </div>
    </div>
  );
}