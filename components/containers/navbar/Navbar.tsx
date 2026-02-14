import React from "react";
import Image from "next/image";
import Logo from "@/public/png/logo.png";
import Mailbox from "@/public/svg/mailbox.svg";
import Hamburger from "@/public/svg/hamburger.svg";

export default function Navbar() {
  return (
    <nav className="sticky">
      <div className="flex items-center justify-between">
        <div>
          <Image alt="Logo" src={Logo} className="w-7 h-7" />
        </div>
        <div className="flex gap-5 items-center">
          <div className="w-10 h-10 flex  justify-center items-center rounded-full bg-gradient-to-r from-pink-600 to-purple-500">
            <Image alt="Mailbox" src={Mailbox} className="w-5 h-5" />
          </div>
          <div>
            <Image alt="Hamburger" src={Hamburger} className="w-5 h-3.5" />
          </div>
        </div>
      </div>
    </nav>
  );
}
