import React from "react";
import Image from "next/image";
import Logo from "@/public/png/logo.png";
import Mailbox from "@/public/svg/mailbox.svg";
import Hamburger from "@/public/svg/hamburger.svg";

export default function Navbar() {
  return (
    <nav className="sticky">
      <div className="flex items-center justify-between">
        <div className="px-5 py-4.5">
          <Image alt="Logo" src={Logo} className="w-10 h-10" />
        </div>
        <div className="flex gap-5 items-center pr-5 py-4.5">
          <div className="w-14 h-14 flex  justify-center items-center rounded-full bg-gradient-to-r from-pink-600 to-purple-500">
            <Image alt="Mailbox" src={Mailbox} className="w-7 h-7" />
          </div>
          <div>
            <Image alt="Hamburger" src={Hamburger} className="w-7 h-5.5" />
          </div>
        </div>
      </div>
    </nav>
  );
}
