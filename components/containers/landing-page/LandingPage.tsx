"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  image: string;
  title: string;
  desc: string;
  chips: string[];
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    image: "/png/project1.png",
    title: "Landing Page",
    desc: 'THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme "Unity in Creativity"',
    chips: ["React", "HTML", "CSS"],
  },
  {
    id: "p2",
    image: "/png/project2.png",
    title: "Landing Page",
    desc: "Private hospital in the city of Padang that provides special surgical services.",
    chips: ["React", "HTML", "CSS"],
  },
  {
    id: "p3",
    image: "/png/project3.png",
    title: "Landing Page",
    desc: "Product engaged in WhatsApp API services and other information technology services.",
    chips: ["React", "HTML", "CSS"],
  },
  {
    id: "p4",
    image: "/png/project4.png",
    title: "Landing Page",
    desc: "nusa.id cloud is part of the Nusanet Group (PT. Media Antar Nusa) of experience as an internet solution provider company",
    chips: ["React", "HTML", "CSS"],
  },
  {
    id: "p5",
    image: "/png/project5.png",
    title: "Landing Page",
    desc: "UKUR is a constructor and interior marketplace in Indonesia.",
    chips: ["React", "HTML", "CSS"],
  },
  {
    id: "p6",
    image: "/png/project6.png",
    title: "Landing Page",
    desc: "Product engaged in WhatsApp API services and other information technology services.",
    chips: ["React", "HTML", "CSS"],
  },
];

export default function Experience() {
  return (
    <section id="projects" className="w-full py-14 mt-16">
      <div className="mx-auto w-full max-w-md md:max-w-6xl text-left">
        <div className="md:flex md:items-start md:justify-between md:gap-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Experience in Front-End
            <br />
            Development
          </h2>

          <p className="mt-4 md:mt-2 text-md leading-relaxed text-neutral-200 md:max-w-md md:text-right">
            I have experience developing 30+ web projects across various
            industries, including marketplaces, health, fashion, sports, and
            more. Implemented 1000+ responsive web pages with interactive
            features and smooth animations
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="overflow-hidden rounded-3xl ring-1 ring-white/10 bg-black/20">
      <div className="p-4">
        <div className="relative overflow-hidden rounded-2xl bg-black/30">
          <Image
            src={p.image}
            alt={p.title}
            width={640}
            height={640}
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>
      </div>

      <div className="px-4 pb-5">
        <h3 className="mt-1 text-lg font-extrabold text-white">{p.title}</h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {p.chips.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-neutral-200">
          {p.desc}
        </p>

        <div className="mt-4">
          <Link
            href="/coming-soon"
            className="inline-flex items-center gap-2 text-md font-semibold"
          >
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Visit
            </span>
            <Image
              src="/svg/arrow.svg"
              alt="Visit"
              width={24}
              height={24}
              className="translate-y-px"
              draggable={false}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-black/30 px-4 py-1 text-xs font-semibold text-white">
      {children}
    </span>
  );
}
