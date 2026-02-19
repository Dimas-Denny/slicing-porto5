"use client";

import React, { useState } from "react";
import Image from "next/image";

import Logo from "@/public/png/logo.png";
import Mailbox from "@/public/svg/mailbox.svg";
import Hamburger from "@/public/svg/hamburger.svg";

import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black">
        <div className="flex items-center justify-between">
          <div className="px-5 py-4.5">
            <Image alt="Logo" src={Logo} className="h-10 w-10" />
          </div>

          <div className="flex items-center gap-5 pr-5 py-4.5">
            <Button
              variant="gradient"
              size="icon"
              className="h-14 w-14 rounded-full"
            >
              <Image alt="Mailbox" src={Mailbox} className="h-7 w-7" />
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
