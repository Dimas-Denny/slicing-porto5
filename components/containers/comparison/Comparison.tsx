"use client";

import React from "react";
import Image from "next/image";

type Row = {
  skill: string;
  me: boolean;
  other: boolean;
};

const ROWS: Row[] = [
  { skill: "React Expert", me: true, other: false },
  { skill: "Perfect Pixel", me: true, other: false },
  { skill: "TypeScript Proficiency", me: true, other: false },
  { skill: "Clean, Maintainable\nCode", me: true, other: false },
  { skill: "Responsive Website", me: true, other: false },
  { skill: "Performance\nOptimization", me: true, other: false },
  { skill: "UI Design Proficiency\n(Figma)", me: true, other: false },
];

export default function Comparison() {
  return (
    <section className="mt-16">
      <div className="w-full px-4 sm:px-6 md:px-20">
        <div className="mx-auto w-full max-w-105 md:max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Why I Stand Out
          </h1>

          <p className="mt-4 text-sm md:text-lg leading-relaxed text-neutral-200 max-w-2xl mx-auto">
            A showcase of my unique approach and skill set compared to
            conventional front-end developers
          </p>

          {/* CARD */}
          <div className="mt-10 rounded-[32px] bg-neutral-600/80 px-5 py-6 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
            {/* HEADER */}
            <div className="grid grid-cols-[1fr_72px_72px] md:grid-cols-[1fr_80px_80px] items-center rounded-full bg-linear-to-r from-pink-500 to-purple-500 px-6 py-5 text-white">
              <p className="text-center text-sm md:text-base font-semibold">
                Skill
              </p>
              <p className="text-center text-sm md:text-base font-semibold">
                Me
              </p>
              <p className="text-center text-sm md:text-base font-semibold">
                Other
              </p>
            </div>

            {/* ROWS */}
            <div className="mt-2 divide-y divide-white/10">
              {ROWS.map((row) => (
                <div
                  key={row.skill}
                  className="grid grid-cols-[1fr_72px_72px] md:grid-cols-[1fr_80px_80px] items-center px-2 md:px-6 py-7"
                >
                  <p className="text-center text-sm md:text-base font-semibold text-white whitespace-pre-line">
                    {row.skill}
                  </p>

                  <div className="flex justify-center">
                    <Mark ok={row.me} />
                  </div>

                  <div className="flex justify-center">
                    <Mark ok={row.other} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mark({ ok }: { ok: boolean }) {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/0">
      <Image
        src={ok ? "/svg/check.svg" : "/svg/no.svg"}
        alt={ok ? "Yes" : "No"}
        width={22}
        height={22}
        draggable={false}
      />
    </span>
  );
}
