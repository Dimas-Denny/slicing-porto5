"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <Image
            src="/png/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-sm text-neutral-300">© alex2024</span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <SocialIcon src="/svg/dribble.svg" alt="Dribble" />
          <SocialIcon src="/svg/ig.svg" alt="Instagram" />
          <SocialIcon src="/svg/linkedin.svg" alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ src, alt }: { src: string; alt: string }) {
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
      />
    </a>
  );
}
