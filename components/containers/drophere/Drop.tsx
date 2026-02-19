"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: sambungkan ke API / email service
    console.log("submit:", form);
  }

  return (
    <main className=" bg-black px-5 py-10">
      <section className="mx-auto w-full max-w-105">
        {/* Header */}
        <header>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Contact Me
          </h1>
          <p className="mt-4 max-w-85 text-[15px] leading-relaxed text-neutral-200">
            Feel free to drop a message for any inquiries <br />
            or collaborations.
          </p>
        </header>

        <div className="relative mt-6">
          <div className="pointer-events-none absolute -inset-6 rounded-[28px] " />

          <div className="relative rounded-[26px]  p-px">
            <div className="rounded-[25px] bg-neutral-500 p-5 ">
              <form onSubmit={onSubmit} className="space-y-3">
                <Field
                  value={form.name}
                  placeholder="Name"
                  onChange={(v) => onChange("name", v)}
                />
                <Field
                  value={form.email}
                  placeholder="Email"
                  onChange={(v) => onChange("email", v)}
                />

                <div className="rounded-2xl bg-black/60 px-4 py-3 ring-1 ring-white/5">
                  <textarea
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    placeholder="Message"
                    className={cn(
                      "h-36 w-full resize-none bg-transparent",
                      "text-[13px] text-white/90 placeholder:text-neutral-200",
                      "outline-none",
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "mt-2 w-full rounded-full py-3",
                    "text-sm font-semibold text-white",
                    "bg-linear-to-r from-pink-500 to-violet-500",
                    "shadow-[0_18px_40px_rgba(168,85,247,0.25)]",
                    "transition hover:brightness-110 active:brightness-95",
                  )}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
}) {
  return (
    <section id="contact">
      <div className="rounded-2xl bg-black/60 px-4 py-3 ring-1 ring-white/5">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full bg-transparent",
            "text-[13px] text-white/90 placeholder:text-neutral-200",
            "outline-none",
          )}
        />
      </div>
    </section>
  );
}
