"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MessageStatus from "@/components/feedback/MessageStatus";

// ✅ assets imports
import backgroundDrop from "@/assets/png/backgrounddrop.png";
import ellipseDrop from "@/assets/png/ellipsedrop.png";

type FormState = {
  name: string;
  email: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validateEmail(email: string) {
  if (email.trim() === "") return "Email is required";
  if (!isValidEmail(email)) return "Email format is invalid";
  return "";
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [statusOpen, setStatusOpen] = useState(false);
  const [statusType, setStatusType] = useState<"success" | "failed">("success");

  const [errors, setErrors] = useState<{ email?: string }>({});

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));

    if (key === "email") {
      const msg = validateEmail(String(value));
      setErrors((e) => ({ ...e, email: msg || undefined }));
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const emailMsg = validateEmail(form.email);
    setErrors((p) => ({ ...p, email: emailMsg || undefined }));

    const ok =
      form.name.trim() !== "" && form.message.trim() !== "" && emailMsg === "";

    setStatusType(ok ? "success" : "failed");
    setStatusOpen(true);
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-black py-10"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={backgroundDrop} // ✅ changed
          alt=""
          fill
          priority={false}
          className="object-cover object-bottom-right opacity-90"
        />

        <div className="absolute bottom-0 right-0 h-130 w-130 md:h-190 md:w-190">
          <Image
            src={ellipseDrop} // ✅ changed
            alt=""
            fill
            priority={false}
            className="object-contain object-bottom-right opacity-80"
          />
        </div>

        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <header className="text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Contact Me
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-neutral-200">
              Feel free to drop a message for any inquiries or collaborations.
            </p>
          </header>

          <div className="md:flex md:justify-end">
            <div className="w-full max-w-md">
              <MessageStatus
                open={statusOpen}
                type={statusType}
                onClose={() => setStatusOpen(false)}
                onAction={() => setStatusOpen(false)}
              />

              <div className="relative rounded-[26px] p-px ring-1 ring-white/10">
                <div className="rounded-[25px] bg-neutral-500/90 p-5 backdrop-blur">
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
                      error={errors.email}
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
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  value,
  placeholder,
  onChange,
  error,
}: {
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div className="space-y-1">
      <div
        className={cn(
          "rounded-2xl bg-black/60 px-4 py-3 ring-1",
          error ? "ring-red-500/70" : "ring-white/5",
        )}
      >
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

      {error ? (
        <p className="px-1 text-[11px] text-red-400/90">{error}</p>
      ) : null}
    </div>
  );
}
