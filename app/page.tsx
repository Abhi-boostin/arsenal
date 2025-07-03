import HeroSection from "./components/HeroSection";
import Work from "./components/Work";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconUser, IconBriefcase } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="text-[12px] font-sans box-border bg-black flex flex-col flex-nowrap gap-0 h-min min-h-screen w-auto items-center content-center justify-start overflow-hidden p-0 relative">
      <div className="text-[12px] font-sans [--framer-aspect-ratio-supported:auto] [--framer-will-change-override:none] box-border [font-smoothing:inherit] flex-none flex flex-col flex-nowrap gap-[96px] h-min justify-start items-center content-center overflow-hidden p-[0_0_420px] relative w-[1120px]">
        <HeroSection />
        <Work />
      </div>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock
          items={[
            { title: "Home", icon: <IconHome />, href: "/" },
            { title: "Work", icon: <IconBriefcase />, href: "/work" },
            { title: "About", icon: <IconUser />, href: "/about" },
          ]}
        />
      </div>
    </div>
  );
}