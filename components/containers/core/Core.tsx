"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import ellipseCore from "@/assets/png/ellipsecore.png";
import ellipseDot from "@/assets/svg/ellipse.svg";
import jsIcon from "@/assets/svg/js.svg";
import tsIcon from "@/assets/svg/ts.svg";
import htmlIcon from "@/assets/svg/html.svg";
import cssIcon from "@/assets/svg/css3.svg";
import reactIcon from "@/assets/svg/react.svg";
import reduxIcon from "@/assets/svg/redux.svg";

type OrbitItem = {
  key: string;
  src: StaticImageData;
  alt: string;
  angle: number;
  radius: number;
  duration: number;
  direction?: 1 | -1;
};

type Skill = { name: string; value: number };

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [query]);

  return matches;
}

export default function Core() {
  const isMdUp = useMediaQuery("(min-width: 768px)");

  const sizes = useMemo(() => {
    if (isMdUp) {
      return {
        CARD_W: 150,
        CARD_H: 70,
        ICON: 48,
        RING_INNER: 210,
        RING_MID: 320,
        RING_OUTER: 440,
        CANVAS: 520,
      };
    }

    return {
      CARD_W: 92,
      CARD_H: 46,
      ICON: 32,
      RING_INNER: 140,
      RING_MID: 220,
      RING_OUTER: 310,
      CANVAS: 320,
    };
  }, [isMdUp]);

  const { CARD_W, CARD_H, ICON, RING_INNER, RING_MID, RING_OUTER, CANVAS } =
    sizes;

  const innerRadius = RING_INNER / 2 - CARD_H / 2;
  const midRadius = RING_MID / 2 - CARD_H / 2;
  const outerRadius = RING_OUTER / 2 - CARD_H / 2;

  const items: OrbitItem[] = [
    {
      key: "js",
      src: jsIcon,
      alt: "JavaScript",
      angle: 240,
      radius: outerRadius,
      duration: 20,
      direction: -1,
    },
    {
      key: "ts",
      src: tsIcon,
      alt: "TypeScript",
      angle: 60,
      radius: outerRadius,
      duration: 20,
      direction: -1,
    },

    {
      key: "html",
      src: htmlIcon,
      alt: "HTML",
      angle: 0,
      radius: midRadius,
      duration: 16,
      direction: 1,
    },
    {
      key: "css",
      src: cssIcon,
      alt: "CSS",
      angle: 120,
      radius: midRadius,
      duration: 16,
      direction: 1,
    },
    {
      key: "react",
      src: reactIcon,
      alt: "React",
      angle: 240,
      radius: midRadius,
      duration: 16,
      direction: 1,
    },

    {
      key: "redux",
      src: reduxIcon,
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
    <section
      id="skills"
      className="relative w-full py-12 overflow-hidden mt-20 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute -top-40 -left-40 md:-top-56 md:-left-56 z-0">
        <Image
          src={ellipseCore}
          alt=""
          width={700}
          height={700}
          className="opacity-80 blur-xl scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            My Core Skill
          </h2>
          <p className="mt-3 text-lg text-neutral-200 leading-relaxed">
            An overview of the key technologies and frameworks I specialize in
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          {/* ORBIT */}
          <div className="w-full flex justify-center md:justify-start">
            <div
              className="relative grid place-items-center mx-auto md:mx-0"
              style={{ width: CANVAS, height: CANVAS }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,transparent_62%)] blur-3xl opacity-55" />

              <Ring size={RING_OUTER} />
              <Ring size={RING_MID} />
              <Ring size={RING_INNER} />

              {/* DOTS */}
              <RingDots ringSize={RING_OUTER} dots={outerRingDots(isMdUp)} />
              <RingDots ringSize={RING_MID} dots={midRingDots(isMdUp)} />
              <RingDots ringSize={RING_INNER} dots={innerRingDots(isMdUp)} />

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

          {/* SKILLS */}
          <div className="w-full flex justify-center md:justify-start">
            <div className="w-full max-w-md mx-auto md:mx-0 text-left">
              <SkillsBars skills={skills} />
            </div>
          </div>
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
      <div
        style={{
          transform: `rotate(${item.angle}deg) translateX(${item.radius}px)`,
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-lg border border-fuchsia-400/45 bg-black/40 backdrop-blur"
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

type RingDot = {
  angle: number;
  size: number;
  opacity?: number;
};

function RingDots({ ringSize, dots }: { ringSize: number; dots: RingDot[] }) {
  const r = ringSize / 2;
  const cx = r;
  const cy = r;

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2"
      style={{
        width: ringSize,
        height: ringSize,
        transform: "translate(-50%, -50%)",
        zIndex: 50,
      }}
    >
      {dots.map((d, idx) => {
        const rad = (d.angle * Math.PI) / 180;
        const x = cx + Math.cos(rad) * r;
        const y = cy + Math.sin(rad) * r;

        return (
          <div
            key={`${ringSize}-${idx}`}
            className="absolute"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              opacity: d.opacity ?? 1,
            }}
          >
            <Image
              src={ellipseDot}
              alt=""
              width={d.size + 2}
              height={d.size + 2}
              draggable={false}
              className="
                brightness-0
                invert
                opacity-30
                drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]
              "
            />
          </div>
        );
      })}
    </div>
  );
}

function outerRingDots(isMdUp: boolean): RingDot[] {
  const s = isMdUp ? 10 : 8;
  return [
    { angle: 28, size: s, opacity: 0.9 },
    { angle: 102, size: s, opacity: 0.75 },
    { angle: 196, size: s + 2, opacity: 0.9 },
    { angle: 312, size: s, opacity: 0.75 },
  ];
}

function midRingDots(isMdUp: boolean): RingDot[] {
  const s = isMdUp ? 9 : 7;
  return [
    { angle: 14, size: s, opacity: 0.85 },
    { angle: 142, size: s + 1, opacity: 0.8 },
    { angle: 248, size: s, opacity: 0.7 },
  ];
}

function innerRingDots(isMdUp: boolean): RingDot[] {
  const s = isMdUp ? 8 : 6;
  return [
    { angle: 70, size: s, opacity: 0.8 },
    { angle: 210, size: s + 1, opacity: 0.9 },
  ];
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
                className="h-3 rounded-full bg-linear-to-r from-pink-500 to-purple-500"
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
