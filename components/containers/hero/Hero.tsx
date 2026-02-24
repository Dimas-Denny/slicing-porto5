import { Button } from "@/components/ui/button";
import Image from "next/image";
import avatarplay from "@/public/png/avatarplay.png";
import cornerFront from "@/public/svg/2.svg";
import cornerEnd from "@/public/svg/1.svg";
import EllipseBig from "@/public/svg/ellipsebig.svg";

export default function Hero() {
  return (
    <section id="home" className="relative mt-24 text-center">
      <div className="pointer-events-none hidden md:block fixed brightness-100 right-0 top-40 z-0">
        <Image src={EllipseBig} alt="" className="w-[600px] opacity-40" />
      </div>
      <div className="flex items-center justify-center">
        <div
          className="
          relative inline-flex
          p-0.5
          rounded-full
          bg-linear-to-r from-pink-500 to-purple-500
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
      </div>

      {/* ================= TITLE ================= */}
      <h1 className="font-bold text-[48px] mt-10 tracking-[-0.02em]">
        <span>I am a&nbsp;</span>

        {/* ===== MOBILE =====*/}
        <span className="md:hidden">
          <span className="relative inline-block p-0.75 bg-linear-to-r from-pink-500 to-purple-500">
            <span className="block bg-black px-2 py-1 leading-none">
              <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold leading-none">
                Front-
              </span>
            </span>

            <Image
              src={cornerFront}
              alt=""
              width={14}
              height={14}
              className="absolute -top-1 -left-1"
            />
            <Image
              src={cornerFront}
              alt=""
              width={14}
              height={14}
              className="absolute -top-1 -right-1"
            />
            <Image
              src={cornerFront}
              alt=""
              width={14}
              height={14}
              className="absolute -bottom-1 -left-1"
            />
            <Image
              src={cornerFront}
              alt=""
              width={14}
              height={14}
              className="absolute -bottom-1 -right-1"
            />
          </span>

          <span className="relative inline-block p-0.75 bg-linear-to-r from-pink-500 to-purple-500">
            <span className="block bg-black px-2 py-1 leading-none">
              <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-[45px] text-transparent font-bold leading-none">
                End Developer
              </span>
            </span>

            <Image
              src={cornerEnd}
              alt=""
              width={14}
              height={14}
              className="absolute -top-1 -left-1"
            />
            <Image
              src={cornerEnd}
              alt=""
              width={14}
              height={14}
              className="absolute -top-1 -right-1"
            />
            <Image
              src={cornerEnd}
              alt=""
              width={14}
              height={14}
              className="absolute -bottom-1 -left-1"
            />
            <Image
              src={cornerEnd}
              alt=""
              width={14}
              height={14}
              className="absolute -bottom-1 -right-1"
            />
          </span>
        </span>

        {/* ===== DESKTOP ===== */}
        <span className="hidden md:inline-block relative p-0.75 bg-linear-to-r from-pink-500 to-purple-500">
          <span className="block bg-black px-3 py-1 leading-none">
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold leading-none">
              Front-End Developer
            </span>
          </span>

          <Image
            src={cornerFront}
            alt=""
            width={14}
            height={14}
            className="absolute -top-1 -left-1"
          />
          <Image
            src={cornerFront}
            alt=""
            width={14}
            height={14}
            className="absolute -top-1 -right-1"
          />
          <Image
            src={cornerFront}
            alt=""
            width={14}
            height={14}
            className="absolute -bottom-1 -left-1"
          />
          <Image
            src={cornerFront}
            alt=""
            width={14}
            height={14}
            className="absolute -bottom-1 -right-1"
          />
        </span>

        <span className="block">& Web Programming Instructor</span>
      </h1>

      <p className="font-bold text-md text-neutral-200 mt-6 mx-auto leading-8 tracking-wide">
        Hi, I’m Alex, a passionate web developer with over{" "}
        <span className="text-neutral-100 text-l">3 years of experience</span>{" "}
        in creating responsive websites. I also teach aspiring developers to
        master modern web programming and bring their ideas to life.
      </p>

      <Button
        variant="gradient"
        className="w-full md:w-auto md:px-10 h-16 md:h-12 mt-6 text-xl md:text-lg"
      >
        View Portfolio
      </Button>

      <div className="relative">
        {/* ================= MOBILE WAVES ================= */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-24 h-36 w-screen md:hidden">
          <Image
            src="/png/waves.png"
            alt="waves"
            fill
            className="object-cover object-top opacity-95 brightness-100 contrast-110 scale-[1.15]"
          />
        </div>

        {/*  Spacer */}
        <div className="h-0 md:h-40 lg:h-48" />

        {/* ================= DESKTOP WAVES2 ================= */}
        <div className="pointer-events-none hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-screen">
          <div className="relative h-40 lg:h-100 lg:mb-100 w-screen overflow-hidden">
            <Image
              src="/png/waves2.png"
              alt="waves"
              fill
              className="object-cover object-top opacity-95 brightness-70 contrast-110"
            />
          </div>
        </div>

        <div className="relative z-10 mt-14 md:mt-0 flex justify-center">
          <Image
            alt="avatarplay"
            src={avatarplay}
            className="w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
          />
        </div>
      </div>
    </section>
  );
}
