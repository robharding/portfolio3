"use client";

import { FC, useContext, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ActiveSectionContext } from "./Providers";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { activeSection, click: setActiveSection } =
    useContext(ActiveSectionContext);

  return (
    <header className="hidden sm:block z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Had issues nesting the nav with animations, so put it below */}
      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link, i) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.01 }}
            >
              <Link
                className={cn(
                  "p-3 hover:text-gray-950 transition",
                  activeSection === link.name && "text-gray-950"
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name === activeSection && (
                  <motion.span
                    className={cn(
                      "bg-gray-100 rounded-full absolute inset-0 -z-10"
                    )}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
