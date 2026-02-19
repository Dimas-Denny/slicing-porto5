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
  { skill: "Perfext Pixel", me: true, other: false },
  { skill: "Typescript Proficiency", me: true, other: false },
  { skill: "Clean, Maintainable\nCode", me: true, other: false },
  { skill: "Responsive Website", me: true, other: false },
  { skill: "Performace\nOptimization", me: true, other: false },
  { skill: "UI Design Proficiency\n(Figma)", me: true, other: false },
];

export default function Comparison() {
  return (
    <section>
      <div className="mx-auto w-full max-w-md px-4 text-center">
        <h1 className="text-4xl font-extrabold">What Sets Me Apart</h1>
        <p className="mt-3 text-lg leading-relaxed text-neutral-200">
          A comparison of my approach and skills against typical programmers.
        </p>
        <div className="mt-10 rounded-3xl bg-black/60 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
          <div className="grid grid-cols-[1fr_56px_56px] items-center rounded-full bg-linear-to-r from-pink-500 to-purple-500 px-5 py-4 text-white">
            <p className="text-left text-sm font-semibold">SKill</p>
            <p className="text-center text-sm font-semibold">Me</p>
            <p className="text-center text-sm font-semibold">Other</p>
          </div>

          <div className="mt-3 divide-y divide-white/10">
            {ROWS.map((row) => (
              <div
                key={row.skill}
                className="grid grid-cols-[1fr_56px_56px] items-center rounded-2xl  px-5 py4"
              >
                <p className="text-left text-sm font-semibold text-white whitespace-pre-line">
                  {row.skill}
                </p>
                <div className="flex justify-center">
                  <Mark ok={row.other} />
                </div>
                <div className="flex justify-center">
                  <Mark ok={row.other} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Mark({ ok }: { ok: boolean }) {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
      <Image
        src={ok ? "/svg/check.svg" : "/svg/no.svg"}
        alt={ok ? "Yes" : "No"}
        width={16}
        height={16}
        draggable={false}
      />
    </span>
  );
}
