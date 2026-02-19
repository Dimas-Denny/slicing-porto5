"use client";

import React, { useId, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "How do you ensure websites load quickly and efficiently?",
    a: "I ensure websites load quickly by optimizing images, using modern formats, and implementing lazy loading. I minimize and bundle CSS/JavaScript, remove unused code, and leverage caching and CDN services. I also optimize APIs and databases, enable compression, and continuously test performance using tools like Lighthouse and WebPageTest.",
  },
  {
    q: "What’s your approach to front-end development?",
    a: "I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.",
  },
  {
    q: "What kind of projects do you specialize in?",
    a: "I specialize in building modern, responsive web applications using technologies like Next.js and React. My focus includes interactive UI development, performance optimization, and seamless front-end and back-end integration. I enjoy creating scalable, user-friendly platforms such as dashboards, content-driven websites, and dynamic web apps.",
  },
  {
    q: "How do you handle project deadlines?",
    a: "I handle project deadlines by breaking tasks into clear milestones and prioritizing based on impact and urgency. I set realistic timelines, track progress regularly, and communicate proactively about risks or blockers. By staying organized and focused, I ensure consistent delivery without compromising quality.",
  },
  {
    q: "What technologies do you use?",
    a: "I primarily use Next.js and React for front-end development, along with TypeScript and Tailwind CSS for clean, maintainable styling. I also work with Node.js for back-end integration, use Git for version control, and leverage tools like ShadCN UI and Framer Motion for modern, interactive interfaces.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <Image
      src={open ? "/svg/up.svg" : "/svg/down.svg"}
      alt={open ? "Collapse" : "Expand"}
      width={18}
      height={18}
      className="shrink-0 select-none opacity-90"
    />
  );
}

function FaqCard({
  item,
  open,
  onToggle,
  buttonId,
  panelId,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
  buttonId: string;
  panelId: string;
}) {
  return (
    // Wrapper border
    <div
      className={cn(
        "rounded-2xl",
        open ? "bg-linear-to-r from-pink-500 to-purple-500 p-px" : "",
      )}
    >
      <div
        className={cn(
          "rounded-2xl",

          "bg-neutral-500",

          !open && "border border-white/10",

          "px-5 py-4",
        )}
      >
        <button
          id={buttonId}
          aria-controls={panelId}
          aria-expanded={open}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 text-left"
        >
          <span className="text-[14px] font-semibold leading-snug text-white/95">
            {item.q}
          </span>
          <Chevron open={open} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="pt-3 text-[13px] leading-relaxed text-white/60">
                {item.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  const ids = useMemo(
    () =>
      FAQS.map((_, i) => ({
        btn: `${baseId}-btn-${i}`,
        panel: `${baseId}-panel-${i}`,
      })),
    [baseId],
  );

  return (
    <main className=" bg-black px-5 py-10">
      <section className="mx-auto w-full max-w-105">
        <header className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Frequently Asked
            <br />
            Question
          </h1>
          <p className="mx-auto mt-3 max-w-[320px] text-sm leading-relaxed text-neutral-200">
            Find answers to some of the frequently asked questions below.
          </p>
        </header>

        <div className="mt-8 space-y-4">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <FaqCard
                key={item.q}
                item={item}
                open={open}
                buttonId={ids[i].btn}
                panelId={ids[i].panel}
                onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
