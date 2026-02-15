import { Button } from "@/components/ui/button";
import Image from "next/image";
import avatarplay from "@/public/png/avatarplay.png";

export default function Hero() {
  return (
    <main className="mt-10 text-center">
      <div className="flex items-center justify-center">
        <div
          className="
          relative inline-flex
          p-0.5
          rounded-full
          bg-linear-to-r from-pink-500 via-purple-500 to-violet-500
          shadow-[0_0_30px_rgba(168,85,247,0.4)]
        "
        >
          <div
            className="
            flex items-center gap-3
            px-6 py-2
            rounded-full
            bg-[#0f0a1f]
            text-white text-lg font-medium
          "
          >
            <span>👨</span>
            <span>Alex’s Portfolio</span>
          </div>
        </div>
        Avata
      </div>
      <h1 className="font-bold text-[48px] mt-10 tracking-[-0.02em]">
        I am a{" "}
        <span className="bg-linear-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent ">
          Front-
        </span>
        <span className="block bg-linear-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          End Developer
        </span>{" "}
        & Web Programming Instructor
      </h1>
      <p className="font-bold text-md text-neutral-200 mt-6 mx-auto leading-8 tracking-wide">
        Hi, I’m Alex, a passionate web developer with over{" "}
        <span className="text-neutral-100 text-l">3 years of experience</span>{" "}
        in creating responsive websites. I also teach aspiring developers to
        master modern web programming and bring their ideas to life.
      </p>
      <Button variant="portfolio" className="w-full h-16 mt-6 text-xl">
        View Portofolio
      </Button>
      <div className="mt-14">
        <Image alt="avatarplay" src={avatarplay} />
      </div>
    </main>
  );
}
