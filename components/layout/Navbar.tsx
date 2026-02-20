"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/png/logo.png";
import Mailbox from "@/public/svg/mailbox.svg";
import Hamburger from "@/public/svg/hamburger.svg";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/layout/MobileMenu";
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

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "bg-black/20 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md",
          "border-b border-white/10",
        )}
      >
        <div className="mx-auto w-full max-w-6xl px-4 md:px-12 ">
          <div className="flex items-center justify-between py-4">
            {/* Left: Logo */}
            <Link href="#home" className="flex items-center gap-3">
              <Image alt="Logo" src={Logo} className="h-10 w-10" />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    text-sm text-white/80 hover:text-white
                    transition
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
              {/*  Mobile: mailbox icon button */}
              <Button
                variant="gradient"
                size="icon"
                className="h-12 w-12 rounded-full md:hidden"
                aria-label="Open contact"
              >
                <Image alt="Mailbox" src={Mailbox} className="h-6 w-6" />
              </Button>

              {/*  Desktop: Hire Me button */}
              <div className="hidden md:flex items-center gap-3 md:px-0">
                <Button variant="gradient" className="h-10 rounded-full px-5">
                  <Image alt="Mailbox" src={Mailbox} className="h-4 w-4" />
                  Hire Me
                </Button>
              </div>

              {/*  Mobile: hamburger */}
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

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
