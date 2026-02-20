"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/public/png/logo.png";
import MessageStatus from "@/components/feedback/MessageStatus";

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

export default function ContactModal({
  open,
  onClose,
  onCloseAll,
}: {
  open: boolean;
  onClose: () => void;
  onCloseAll?: () => void;
}) {
  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<{ email?: string }>({});

  const [statusOpen, setStatusOpen] = React.useState(false);
  const [statusType, setStatusType] = React.useState<"success" | "failed">(
    "success",
  );

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

    const isValid =
      form.name.trim() !== "" && form.message.trim() !== "" && emailMsg === "";

    if (isValid) {
      setStatusType("success");
    } else {
      setStatusType("failed");
    }

    setStatusOpen(true);
  }

  // lock scroll + ESC close
  React.useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-70 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <motion.button
            aria-label="Close contact backdrop"
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: 22, opacity: 0, scale: 0.985 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 22, opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={cn(
              "absolute left-1/2 top-1/2 w-[92%] max-w-105 -translate-x-1/2 -translate-y-1/2",
              "rounded-[28px] bg-[#0b0b0f] p-5",
              "shadow-[0_30px_90px_rgba(0,0,0,0.75)]",
              "ring-1 ring-white/10",
            )}
          >
            {/* close */}
            <div className="flex items-start justify-between mb-4">
              <Image src={Logo} alt="Logo" className="h-10 w-10" />

              <button
                onClick={onClose}
                className="rounded-full p-2 text-white/90 hover:bg-white/10 transition"
                aria-label="Close contact modal"
              >
                <X size={18} />
              </button>
            </div>
            <MessageStatus
              open={statusOpen}
              type={statusType}
              onClose={() => setStatusOpen(false)}
              onAction={() => {
                if (statusType === "success") {
                  setStatusOpen(false);

                  onClose();

                  setTimeout(() => {
                    window.location.hash = "home";
                  }, 120);

                  onCloseAll?.();
                } else {
                  setStatusOpen(false);
                }
              }}
            />

            {/* form wrapper */}
            <div className="rounded-[22px] bg-black/40 p-4 ring-1 ring-white/10">
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
                <div className="rounded-2xl bg-black/55 px-4 py-3 ring-1 ring-white/10">
                  <textarea
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    placeholder="Message"
                    className={cn(
                      "h-44 w-full resize-none bg-transparent",
                      "text-[13px] text-white/90 placeholder:text-white/35",
                      "outline-none",
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "mt-2 w-full rounded-full py-4",
                    "text-sm font-semibold text-white",
                    "bg-linear-to-r from-pink-500 to-purple-500",
                    "shadow-[0_18px_40px_rgba(168,85,247,0.25)]",
                    "hover:brightness-110 active:brightness-95 transition",
                  )}
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
          "rounded-2xl bg-black/55 px-4 py-3 ring-1",
          error ? "ring-red-500/60" : "ring-white/10",
        )}
      >
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full bg-transparent",
            "text-[13px] text-white/90 placeholder:text-white/35",
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
