"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Company from "@/public/svg/company.svg";
import DateIcon from "@/public/svg/date.svg";
import Dot from "@/public/svg/dot.svg";

type CareerItem = {
  title: string;
  company: string;
  date: string;
  points: string[];
};

function TimelineItem({ item, index }: { item: CareerItem; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.4 });

  const activeGlow =
    "drop-shadow(0 0 8px rgba(236,72,153,0.8)) drop-shadow(0 0 20px rgba(168,85,247,0.7))";

  // ✅ Mobile: dot turun (mt-8)
  // ✅ md+: dot mentok atas (mt-0) supaya start garis & dot sejajar
  const dotOffset = "mt-8 md:mt-4";

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-[36px_1fr] gap-6 group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 10 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
    >
      <div className="relative flex justify-center">
        <motion.div
          className={dotOffset}
          animate={{ scale: inView ? 1.15 : 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          style={{
            filter: inView ? activeGlow : undefined,
          }}
        >
          <Image
            src={Dot}
            alt="timeline dot"
            className="w-20 h-20 transition-all duration-300 group-hover:scale-150"
          />
        </motion.div>
      </div>

      <Card className="rounded-3xl border-0 bg-neutral-500 py-0 text-white">
        <CardHeader className="px-6 pt-7 pb-0">
          <CardTitle className="text-2xl font-semibold">{item.title}</CardTitle>

          {/* ✅ Mobile: stack (kolom) */}
          {/* ✅ md+: company & date bersebelahan */}
          <div className="mt-4 flex flex-col gap-3 text-lg md:flex-row md:items-center md:gap-10">
            <div className="flex items-center gap-3">
              <Image src={Company} alt="company icon" className="w-5 h-5" />
              <span>{item.company}</span>
            </div>

            <div className="flex items-center gap-3">
              <Image src={DateIcon} alt="calendar icon" className="w-5 h-5" />
              <span>{item.date}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-7">
          <ul className="space-y-4 text-neutral-200 text-lg">
            {item.points.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-200" />
                <p>{p}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Career() {
  const items: CareerItem[] = [
    {
      title: "Fronted Developer",
      company: "Repository Solusi Indonesia",
      date: "Jul 2024 – Present",
      points: [
        "Developed and maintained responsive web applications, improving load times by 30% through performance optimization.",
        "Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.",
        "Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.",
        "Implemented interactive animations and dynamic features, enhancing user engagement by 25%.",
      ],
    },
    {
      title: "Fronted Developer",
      company: "Bali United",
      date: "Jul 2023 – Jul 2024",
      points: [
        "Developed and maintained responsive web applications, improving load times by 30% through performance optimization.",
        "Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.",
        "Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.",
        "Implemented interactive animations and dynamic features, enhancing user engagement by 25%.",
      ],
    },
    {
      title: "Fronted Developer",
      company: "UKUR",
      date: "Nov 2021 – Jul 2023",
      points: [
        "Developed and maintained responsive web applications, improving load times by 30% through performance optimization.",
        "Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.",
        "Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.",
        "Implemented interactive animations and dynamic features, enhancing user engagement by 25%.",
      ],
    },
  ];

  const lineGradient =
    "bg-gradient-to-b from-pink-500 via-purple-500 to-violet-500";

  return (
    <main className="mt-30">
      <div className="text-center">
        <div className="text-4xl font-extrabold">Career Journey</div>
        <h1 className="text-neutral-200 mt-6 leading-8 text-xl">
          A visual timeline of key milestones and experiences from over the
          years.
        </h1>
      </div>

      <div className="w-full mt-12">
        <div className="relative">
          {/* ✅ Vertical Line */}
          {/* Mobile: mulai top-8 (ngikut dot yang mt-8) */}
          {/* md+: mulai top-0 (ngikut dot yang md:mt-0) */}
          <div
            className={`absolute left-4.5 top-8 md:top-8 bottom-0 w-0.75 rounded-full ${lineGradient}`}
          />

          <div className="space-y-6">
            {items.map((item, idx) => (
              <TimelineItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
