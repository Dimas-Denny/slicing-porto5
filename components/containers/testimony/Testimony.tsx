"use client";

import React, { useMemo } from "react";
import Image from "next/image";

type Testi = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const QUOTE =
  "“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”";

export default function Testimony() {
  const base = useMemo<Testi[]>(
    () => [
      {
        id: "t1",
        name: "Rafel Struick",
        role: "CEO",
        quote: QUOTE,
        avatar: "/png/avatar1.png",
      },
      {
        id: "t2",
        name: "Rafel Struick",
        role: "CEO",
        quote: QUOTE,
        avatar: "/png/avatar2.png",
      },
      {
        id: "t3",
        name: "Rafel Struick",
        role: "CEO",
        quote: QUOTE,
        avatar: "/png/avatar3.png",
      },
      {
        id: "t4",
        name: "Rafel Struick",
        role: "CEO",
        quote: QUOTE,
        avatar: "/png/avatar4.png",
      },
      {
        id: "t5",
        name: "Rafel Struick",
        role: "CEO",
        quote: QUOTE,
        avatar: "/png/avatar5.png",
      },
      {
        id: "t6",
        name: "Rafel Struick",
        role: "CEO",
        quote: QUOTE,
        avatar: "/png/avatar6.png",
      },
    ],
    [],
  );

  const row1 = base;
  const row2 = base;

  return (
    <section className="w-full py-14">
      <div className="mx-auto w-full max-w-5xl px-4 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white">
          Why People Say
          <br />
          About Me
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-200">
          Hear from clients and colleagues about their
          <br />
          experiences working with me.
        </p>

        <div className="mt-10 space-y-8">
          <TestimonyRow items={row1} initialOffset={60} />

          <TestimonyRow items={row2} initialOffset={60 + 2 * 320} />
        </div>
      </div>
    </section>
  );
}

function TestimonyRow({
  items,
  initialOffset = 0,
}: {
  items: Testi[];
  initialOffset?: number;
}) {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(0);

  // default position
  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const id = requestAnimationFrame(() => {
      el.scrollLeft = initialOffset;
    });

    return () => cancelAnimationFrame(id);
  }, [initialOffset]);

  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cards = Array.from(
        el.querySelectorAll<HTMLDivElement>("[data-card]"),
      );

      const center = el.scrollLeft + el.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(center - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActive(closestIndex);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollByAmount = (amount: number) => {
    viewportRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Left */}
      <button
        onClick={() => scrollByAmount(-320)}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 backdrop-blur"
      >
        <Image src="/svg/left.svg" alt="Left" width={18} height={18} />
      </button>

      {/* Right */}
      <button
        onClick={() => scrollByAmount(320)}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 backdrop-blur"
      >
        <Image src="/svg/right.svg" alt="Right" width={18} height={18} />
      </button>

      <div
        ref={viewportRef}
        className="no-scrollbar overflow-x-auto scroll-smooth px-8 sm:px-4 snap-x snap-mandatory"
      >
        <div className="flex gap-5">
          {items.map((t, i) => (
            <TestimonyCard key={t.id} t={t} active={i === active} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonyCard({ t, active }: { t: Testi; active: boolean }) {
  return (
    <div data-card className="w-75 shrink-0 rounded-3xl snap-center">
      <div
        className={`rounded-3xl p-px transition-all duration-300 ${
          active
            ? "bg-linear-to-r from-pink-500 to-purple-500"
            : "bg-transparent"
        }`}
      >
        <div className="rounded-3xl bg-black p-6 text-left ring-1 ring-white/10">
          <div className="flex items-start gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10">
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="mt-0.5 text-xs text-neutral-200">{t.role}</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-neutral-200">
            {t.quote}
          </p>
        </div>
      </div>
    </div>
  );
}
