import React from "react";
import Image from "next/image";
import Logo from "@/public/png/logo.png";
import Mailbox from "@/public/svg/mailbox.svg";
import Hamburger from "@/public/svg/hamburger.svg";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className="flex items-center justify-between">
        <div className="px-5 py-4.5">
          <Image alt="Logo" src={Logo} className="w-10 h-10" />
        </div>
        <div className="flex gap-5 items-center pr-5 py-4.5">
          <Button
            variant="gradient"
            size="icon"
            className="w-14 h-14 rounded-full"
          >
            <Image alt="Mailbox" src={Mailbox} className="w-7 h-7" />
          </Button>

          <Image alt="Hamburger" src={Hamburger} className="w-7 h-5.5" />
        </div>
      </div>
    </nav>
  );
}
