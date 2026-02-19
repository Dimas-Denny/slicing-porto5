"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <section className="w-full py-14 mt-16">
      <div className="mx-auto w-full max-w-md px-4 text-left">
        <h2 className="text-4xl font-extrabold tracking-tight text-white">
          Experience in Front-
          <br />
          End Development
        </h2>

        <p className="mt-4 text-md leading-relaxed text-neutral-200">
          I have experience developing 30+ web projects across various
          industries, including marketplaces, health, fashion, sports, and more.
          Implemented 1000+ responsive web pages with interactive features and
          smooth animations
        </p>

        {/* Project card */}
        <div className="mt-8">
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <div className="p-4">
              <div className="relative overflow-hidden rounded-2xl bg-black/30">
                <Image
                  src="/png/project1.png"
                  alt="Project 1"
                  width={320}
                  height={320}
                  className="h-auto w-full object-cover"
                  priority={false}
                />
              </div>
            </div>

            <div className="px-4 pb-5">
              <h3 className="mt-1 text-lg font-extrabold text-white">
                Landing Page
              </h3>

              {/* chips */}
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>React</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
              </div>

              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-neutral-200">
                THE BIGGEST community event in Indonesia, which will run for 30
                full days with the theme &quot;Unity in Creativity&quot;
              </p>

              {/* Visit button */}
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
        </div>
        <div className="mt-8">
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <div className="p-4">
              <div className="relative overflow-hidden rounded-2xl bg-black/30">
                <Image
                  src="/png/project2.png"
                  alt="Project 2"
                  width={320}
                  height={320}
                  className="h-auto w-full object-cover"
                  priority={false}
                />
              </div>
            </div>

            <div className="px-4 pb-5">
              <h3 className="mt-1 text-lg font-extrabold text-white">
                Landing Page
              </h3>

              {/* chips */}
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>React</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
              </div>

              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-neutral-200">
                Private hospital in the city of Padang that provides special
                surgical services.
              </p>

              {/* Visit button */}
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
        </div>
        <div className="mt-8">
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <div className="p-4">
              <div className="relative overflow-hidden rounded-2xl bg-black/30">
                <Image
                  src="/png/project3.png"
                  alt="Project 3"
                  width={320}
                  height={320}
                  className="h-auto w-full object-cover"
                  priority={false}
                />
              </div>
            </div>

            <div className="px-4 pb-5">
              <h3 className="mt-1 text-lg font-extrabold text-white">
                Landing Page
              </h3>

              {/* chips */}
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>React</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
              </div>

              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-neutral-200">
                Product engaged in WhatsApp API services and other information
                technology services.
              </p>

              {/* Visit button */}
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
        </div>
        <div className="mt-8">
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <div className="p-4">
              <div className="relative overflow-hidden rounded-2xl bg-black/30">
                <Image
                  src="/png/project4.png"
                  alt="Project 4"
                  width={320}
                  height={320}
                  className="h-auto w-full object-cover"
                  priority={false}
                />
              </div>
            </div>

            <div className="px-4 pb-5">
              <h3 className="mt-1 text-lg font-extrabold text-white">
                Landing Page
              </h3>

              {/* chips */}
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>React</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
              </div>

              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-neutral-200">
                nusa.id cloud is part of the Nusanet Group (PT. Media Antar
                Nusa) of experience as an internet solution provider company
              </p>

              {/* Visit button */}
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
        </div>
        <div className="mt-8">
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <div className="p-4">
              <div className="relative overflow-hidden rounded-2xl bg-black/30">
                <Image
                  src="/png/project5.png"
                  alt="Project 5"
                  width={320}
                  height={320}
                  className="h-auto w-full object-cover"
                  priority={false}
                />
              </div>
            </div>

            <div className="px-4 pb-5">
              <h3 className="mt-1 text-lg font-extrabold text-white">
                Landing Page
              </h3>

              {/* chips */}
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>React</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
              </div>

              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-neutral-200">
                UKUR is a constructor and interior marketplace in Indonesia.
              </p>

              {/* Visit button */}
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
        </div>
        <div className="mt-8">
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <div className="p-4">
              <div className="relative overflow-hidden rounded-2xl bg-black/30">
                <Image
                  src="/png/project6.png"
                  alt="Project 6"
                  width={320}
                  height={320}
                  className="h-auto w-full object-cover"
                  priority={false}
                />
              </div>
            </div>

            <div className="px-4 pb-5">
              <h3 className="mt-1 text-lg font-extrabold text-white">
                Landing Page
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>React</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
              </div>

              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-neutral-200">
                Product engaged in WhatsApp API services and other information
                technology services.
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
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-black/30 px-4 py-1 text-xs font-semibold text-white">
      {children}
    </span>
  );
}
