"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Mail } from "lucide-react";

import Logo from "@/public/png/logo.png";
import { cn } from "@/lib/utils";

import ContactModal from "../modals/ContactModal";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [contactOpen, setContactOpen] = React.useState(false);

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
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-60 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.button
              aria-label="Close menu backdrop"
              className="absolute inset-0 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Panel */}
            <motion.aside
              role="dialog"
              aria-modal="true"
              initial={{ y: 22, opacity: 0, scale: 0.985 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 22, opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={cn(
                "absolute left-1/2 top-6 w-[92%] max-w-105 -translate-x-1/2",
                "rounded-2xl bg-black",
                "px-6 pt-7 pb-8",
                "shadow-[0_30px_90px_rgba(0,0,0,0.75)]",
                "ring-1 ring-white/10",
              )}
            >
              {/* logo + close */}
              <div className="flex items-start justify-between">
                <Image src={Logo} alt="Logo" className="h-10 w-10" />

                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-white/90 hover:bg-white/10 transition"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <nav className="mt-10">
                <ul className="space-y-7">
                  {NAV.map((it) => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        onClick={onClose}
                        className="text-[16px] font-medium text-white/90 hover:text-white transition"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA */}
              <div className="mt-12">
                <button
                  type="button"
                  onClick={() => {
                    onClose(); // tutup menu dulu
                    setTimeout(() => setContactOpen(true), 120);
                  }}
                  className={cn(
                    "flex w-full items-center justify-center gap-2",
                    "rounded-full py-4",
                    "text-sm font-semibold text-white",
                    "bg-linear-to-r from-pink-500 to-purple-500",
                    "shadow-[0_18px_40px_rgba(168,85,247,0.25)]",
                    "hover:brightness-110 active:brightness-95 transition",
                  )}
                >
                  <Mail size={16} />
                  Contact me
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
