"use client";

import Image, { type StaticImageData } from "next/image";

// ✅ import assets
import logo from "@/assets/png/logo.png";
import dribbleIcon from "@/assets/svg/dribble.svg";
import igIcon from "@/assets/svg/ig.svg";
import linkedinIcon from "@/assets/svg/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="w-full px-4 sm:px-6 md:px-20">
        <div className="flex items-center justify-between py-6">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <Image
              src={logo} // ✅ changed
              alt="Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-sm text-neutral-300">© alex2024</span>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <SocialIcon src={dribbleIcon} alt="Dribble" />
            <SocialIcon src={igIcon} alt="Instagram" />
            <SocialIcon src={linkedinIcon} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  src,
  alt,
}: {
  src: StaticImageData; // ✅ changed
  alt: string;
}) {
  return (
    <a
      href="#"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-white/15
        bg-white/5
        transition
        hover:bg-white/10
      "
    >
      <Image
        src={src}
        alt={alt}
        width={alt === "Dribble" ? 34 : 20}
        height={alt === "Dribble" ? 34 : 20}
        draggable={false}
      />
    </a>
  );
}
