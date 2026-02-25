"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import Logo from "@/public/png/logo.png";
import Mailbox from "@/public/svg/mailbox.svg";
import { Button } from "@/components/ui/button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  onContact: () => void; // klik Hire Me
};

const NAV_ITEMS = [
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
  onContact,
}: MobileMenuProps) {
  // lock scroll ketika menu kebuka
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col min-h-screen px-8 py-10">
            {/* Header */}
            <div className="flex items-start justify-between">
              <Image
                src={Logo}
                alt="Logo"
                className="h-10 w-10 object-contain"
                priority
              />

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Nav Items */}
            <nav className="mt-14 flex flex-col gap-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-white text-lg font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Hire Me */}
            <Button
              variant="gradient"
              className="w-full h-14 rounded-full text-base font-semibold"
              onClick={() => {
                onClose();
                onContact();
              }}
            >
              <Image alt="Mailbox" src={Mailbox} className="h-5 w-5" />
              Hire Me
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
