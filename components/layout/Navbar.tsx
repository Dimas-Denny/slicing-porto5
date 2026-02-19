"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/png/logo.png";
import Mailbox from "@/public/svg/mailbox.svg";
import Hamburger from "@/public/svg/hamburger.svg";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

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
        <div className="flex h-full items-center justify-between px-4 py-4">
          <Image alt="Logo" src={Logo} className="h-10 w-10" />

          <div className="flex items-center gap-5">
            <Button
              variant="gradient"
              size="icon"
              className="h-12 w-12 rounded-full"
            >
              <Image alt="Mailbox" src={Mailbox} className="h-6 w-6" />
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="rounded-full p-2 hover:bg-white/5 transition"
            >
              <Image alt="Hamburger" src={Hamburger} className="h-5.5 w-7" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
