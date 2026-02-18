"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Company from "@/public/svg/company.svg";
import Date from "@/public/svg/date.svg";

export default function Career() {
  return (
    <main className="h-700 mt-30 ">
      <div className="text-center">
        <div className="text-4xl font-extrabold">Career Journey</div>
        <h1 className="text-neutral-200 mt-6 leading-8 text-xl">
          A visual timeline of key milestones and experiences from over the
          years.
        </h1>
      </div>
      <div className="w-full mt-12">
        <div className="rounded-3xl p-px">
          <Card className="rounded-3xl border-0 bg-neutral-500 py-0 text-white">
            <CardHeader className="px-6 pt-7 pb-0">
              <CardTitle className="text-2xl font-semibold">
                Fronted Developer
              </CardTitle>

              <div className="mt-4 text-lg flex items-center gap-3">
                <Image src={Company} alt="company icon" className="w-5 h-5" />
                <span>Repository Solusi Indonesia</span>
              </div>

              <div className="mt-3 flex text-lg items-center gap-3">
                <Image src={Date} alt="calendar icon" className="w-5 h-5" />
                <span>Jul 2024 – Present</span>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-7 ">
              <ul className="space-y-4 text-neutral-200 text-lg">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-200" />
                  <p>
                    Developed and maintained responsive web applications,
                    improving load times by 30% through performance
                    optimization.
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-200" />
                  <p>
                    Translated UI/UX designs into functional and visually
                    appealing web interfaces using React and TailwindCSS.
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-200" />
                  <p>
                    Collaborated with backend teams to integrate APIs, ensuring
                    seamless data flow and functionality.
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-200" />
                  <p>
                    Implemented interactive animations and dynamic features,
                    enhancing user engagement by 25%.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
