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

type Skill = { name: string; value: number };

export default function Core() {
  // box and icon
  const CARD_W = 96;
  const CARD_H = 48;
  const ICON = 34;

  // ring
  const RING_INNER = 150;
  const RING_MID = 250;
  const RING_OUTER = 350;

  // canvas
  const CANVAS = 380;

  // radius card
  const innerRadius = RING_INNER / 2 - CARD_H / 2; // 51
  const midRadius = RING_MID / 2 - CARD_H / 2; // 101
  const outerRadius = RING_OUTER / 2 - CARD_H / 2; // 151

  const items: OrbitItem[] = [
    // outer ring
    {
      key: "js",
      src: "/svg/js.svg",
      alt: "JavaScript",
      angle: 240,
      radius: outerRadius,
      duration: 20,
      direction: -1,
    },
    {
      key: "ts",
      src: "/svg/ts.svg",
      alt: "TypeScript",
      angle: 60,
      radius: outerRadius,
      duration: 20,
      direction: -1,
    },

    // mid ring
    {
      key: "html",
      src: "/svg/html.svg",
      alt: "HTML",
      angle: 0,
      radius: midRadius,
      duration: 16,
      direction: 1,
    },
    {
      key: "css",
      src: "/svg/css3.svg",
      alt: "CSS",
      angle: 120,
      radius: midRadius,
      duration: 16,
      direction: 1,
    },
    {
      key: "react",
      src: "/svg/react.svg",
      alt: "React",
      angle: 240,
      radius: midRadius,
      duration: 16,
      direction: 1,
    },

    // inner ring
    {
      key: "redux",
      src: "/svg/redux.svg",
      alt: "Redux",
      angle: 0,
      radius: innerRadius,
      duration: 12,
      direction: -1,
    },
  ];

  const skills: Skill[] = [
    { name: "HTML", value: 100 },
    { name: "Redux", value: 85 },
    { name: "Javascript", value: 90 },
    { name: "React", value: 90 },
    { name: "CSS", value: 80 },
    { name: "Typescript", value: 70 },
  ];

  return (
    <section id="skills" className="w-full py-12">
      <div className="mx-auto w-full max-w-5xl px-4 text-center">
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

          <Ring size={RING_OUTER} />
          <RingDots
            size={RING_OUTER}
            dotSize={10}
            angles={[58, 168, 214, 318]}
          />

          <Ring size={RING_MID} />
          <RingDots size={RING_MID} dotSize={9} angles={[0, 90, 225, 270]} />

          <Ring size={RING_INNER} />
          <RingDots size={RING_INNER} dotSize={8} angles={[110, 250]} />

          {/* orbit icons */}
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
        <div className="mx-auto mt-10 w-full text-left">
          <SkillsBars skills={skills} />
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
      {/* arm */}
      <div
        style={{
          transform: `rotate(${item.angle}deg) translateX(${item.radius}px)`,
        }}
      >
        {/* card tetap lurus */}
        <motion.div
          className="flex items-center justify-center rounded-lg border border-fuchsia-400/45 bg-black/40 backdrop-blur shadow-[0_0_0_1px_rgba(236,72,153,0.10)]"
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

function RingDots({
  size,
  angles,
  dotSize = 10,
  src = "/svg/ellipse.svg",
  opacity = 0.9,
}: {
  size: number;
  angles: number[];
  dotSize?: number;
  src?: string;
  opacity?: number;
}) {
  const r = size / 2;

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-10"
      style={{ width: size, height: size, transform: "translate(-50%, -50%)" }}
      aria-hidden="true"
    >
      {angles.map((a, idx) => (
        <div
          key={`${size}-${a}-${idx}`}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(-50%, -50%) rotate(${a}deg) translateX(${r}px)`,
          }}
        >
          <Image
            src={src}
            alt=""
            width={dotSize}
            height={dotSize}
            draggable={false}
            className="drop-shadow-[0_0_10px_rgba(236,72,153,0.35)]"
            style={{ opacity }}
          />
        </div>
      ))}
    </div>
  );
}

function SkillsBars({ skills }: { skills: Skill[] }) {
  return (
    <div className="space-y-6">
      {skills.map((s) => {
        const value = clamp(s.value, 0, 100);
        return (
          <div key={s.name}>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">{s.name}</p>
              <p className="text-sm font-semibold text-white">{value}%</p>
            </div>

            <div className="h-3 w-full rounded-full bg-neutral-800">
              <div
                className="h-3 rounded-full bg-linear-to-r from-pink-500 to-purple-500 "
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
