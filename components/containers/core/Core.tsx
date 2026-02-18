"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type OrbitItem = {
  key: string;
  src: string;
  alt: string;
  angle: number;
  radius: number;
  duration: number;
  direction?: 1 | -1;
};

export default function Core() {
  // ✅ box + icon
  const CARD_W = 96;
  const CARD_H = 48;
  const ICON = 34;

  // ✅ ring (punya kamu)
  const RING_INNER = 150;
  const RING_MID = 250;
  const RING_OUTER = 350;

  // ✅ kanvas harus >= ring terbesar (biar gak kepotong)
  const CANVAS = 380;

  // ✅ radius biar pas di garis ring (box “duduk” di ring)
  const innerRadius = RING_INNER / 2 - CARD_H / 2; // 51
  const midRadius = RING_MID / 2 - CARD_H / 2; // 101
  const outerRadius = RING_OUTER / 2 - CARD_H / 2; // 151

  const items: OrbitItem[] = [
    // OUTER ring (350)
    {
      key: "js",
      src: "/svg/js.svg",
      alt: "JavaScript",
      angle: 185,
      radius: outerRadius,
      duration: 20,
      direction: -1,
    },
    {
      key: "ts",
      src: "/svg/ts.svg",
      alt: "TypeScript",
      angle: 120,
      radius: outerRadius,
      duration: 20,
      direction: -1,
    },

    // MID ring (250)
    {
      key: "html",
      src: "/svg/html.svg",
      alt: "HTML",
      angle: 315,
      radius: midRadius,
      duration: 16,
      direction: 1,
    },
    {
      key: "css",
      src: "/svg/css3.svg",
      alt: "CSS",
      angle: 40,
      radius: midRadius,
      duration: 16,
      direction: 1,
    },
    {
      key: "react",
      src: "/svg/react.svg",
      alt: "React",
      angle: 235,
      radius: midRadius,
      duration: 18,
      direction: 1,
    },

    // INNER ring (150) — OpenAI
    {
      key: "openai",
      src: "/svg/openai.svg",
      alt: "OpenAI",
      angle: 0,
      radius: innerRadius,
      duration: 14,
      direction: 1,
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-95 px-4 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white">
          My Core Skill
        </h2>
        <p className="mt-3 text-lg text-neutral-200 leading-relaxed">
          An overview of the key technologies and frameworks I specialize in
        </p>

        <div
          className="relative mx-auto mt-10 grid place-items-center"
          style={{ width: CANVAS, height: CANVAS }}
        >
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,transparent_62%)] blur-3xl opacity-55" />

          {/* rings */}
          <Ring size={RING_OUTER} />
          <Ring size={RING_MID} />
          <Ring size={RING_INNER} />

          {/* orbit items */}
          {items.map((item) => (
            <OrbitIcon
              key={item.key}
              item={item}
              cardW={CARD_W}
              cardH={CARD_H}
              iconSize={ICON}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function OrbitIcon({
  item,
  cardW,
  cardH,
  iconSize,
}: {
  item: OrbitItem;
  cardW: number;
  cardH: number;
  iconSize: number;
}) {
  const dir = item.direction ?? 1;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ x: "-50%", y: "-50%" }}
      animate={{ rotate: dir === 1 ? 360 : -360 }}
      transition={{ duration: item.duration, repeat: Infinity, ease: "linear" }}
    >
      {/* arm: sebar posisi di lingkaran */}
      <div
        style={{
          transform: `rotate(${item.angle}deg) translateX(${item.radius}px)`,
        }}
      >
        {/* card tetap lurus */}
        <motion.div
          className="flex items-center justify-center rounded-xl border border-fuchsia-400/45 bg-black/40 backdrop-blur shadow-[0_0_0_1px_rgba(236,72,153,0.10)]"
          style={{
            width: cardW,
            height: cardH,
            rotate: -item.angle,
          }}
          animate={{
            rotate: -item.angle + (dir === 1 ? -360 : 360),
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={iconSize}
            height={iconSize}
            draggable={false}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Ring({ size }: { size: number }) {
  return (
    <div
      className="pointer-events-none absolute rounded-full border border-white/10"
      style={{ width: size, height: size }}
    />
  );
}
