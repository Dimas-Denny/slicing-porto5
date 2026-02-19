"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black px-5 py-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center gap-4">
          <SocialIcon src="/svg/dribble.svg" alt="Dribbble" size={34} />
          <SocialIcon src="/svg/ig.svg" alt="Instagram" />
          <SocialIcon src="/svg/linkedin.svg" alt="LinkedIn" />
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Image
            src="/png/logo.png"
            alt="Logo"
            width={42}
            height={42}
            className="object-contain"
          />
          <span className="text-sm text-neutral-200">@alex2024</span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  src,
  alt,
  size = 20,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  return (
    <a
      href="#"
      className="
        flex h-12 w-12 items-center justify-center
        rounded-full
        border border-white/15
        bg-white/5
        transition
        hover:bg-white/10
      "
    >
      <Image src={src} alt={alt} width={size} height={size} />
    </a>
  );
}
