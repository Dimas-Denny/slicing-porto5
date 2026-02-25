"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/png/logo.png";
import Mailbox from "@/public/svg/mailbox.svg";
import Hamburger from "@/public/svg/hamburger.svg";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/layout/MobileMenu";
import ContactModal from "@/components/modals/ContactModal";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "bg-black/20 backdrop-blur-md supports-backdrop-filter:backdrop-blur-md",
          "border-b border-white/10",
        )}
      >
        <div className="w-full px-4 sm:px-6 md:px-20 transition-all duration-300">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center py-4">
            <div className="flex items-center justify-start">
              <Link href="#home" className="flex items-center gap-3">
                <Image alt="Logo" src={Logo} className="h-10 w-10" />
              </Link>
            </div>

            {/* Center (desktop only) */}
            <div className="hidden md:flex items-center justify-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center justify-end gap-4">
              {/* Mobile: mailbox (open contact modal) */}
              <Button
                variant="gradient"
                size="icon"
                className="h-12 w-12 rounded-full md:hidden"
                aria-label="Open contact"
                onClick={() => {
                  setMenuOpen(false);
                  openContact();
                }}
              >
                <Image alt="Mailbox" src={Mailbox} className="h-6 w-6" />
              </Button>

              {/* Desktop: Hire Me (open contact modal) */}
              <div className="hidden md:flex items-center gap-3">
                <Button
                  variant="gradient"
                  className="h-10 rounded-full px-5"
                  onClick={() => {
                    setMenuOpen(false);
                    openContact();
                  }}
                >
                  <Image alt="Mailbox" src={Mailbox} className="h-4 w-4" />
                  Hire Me
                </Button>
              </div>

              {/* Mobile: hamburger */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="rounded-full p-2 hover:bg-white/5 transition md:hidden"
              >
                <Image alt="Hamburger" src={Hamburger} className="h-5.5 w-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onContact={() => {
          setMenuOpen(false);
          setContactOpen(true);
        }}
      />

      <ContactModal
        open={contactOpen}
        onClose={closeContact}
        onCloseAll={() => {
          setMenuOpen(false);
          setContactOpen(false);
        }}
      />
    </>
  );
}
