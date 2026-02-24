"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  onContact: () => void; // ✅ baru
};

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu({ open, onClose, onContact }: Props) {
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-60 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* overlay */}
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          />

          {/* panel */}
          <motion.aside
            className={cn(
              "absolute right-0 top-0 h-full w-[86%] max-w-90",
              "bg-neutral-600/95 ring-1 ring-white/10",
              "p-6",
            )}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-white text-lg font-bold">Menu</p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full px-3 py-2 text-white/80 hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-2xl bg-black/30 px-4 py-3 text-white/90 hover:bg-black/40 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* ✅ Contact Me -> buka ContactModal */}
            <div className="mt-6">
              <Button
                variant="gradient"
                className="w-full h-12 rounded-full"
                onClick={onContact}
              >
                Contact Me
              </Button>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
