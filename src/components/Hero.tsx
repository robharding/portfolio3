"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MoveRight,
} from "lucide-react";

import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="w-full sm:w-[36rem] md:w-fit mx-auto">
      <div className="flex w-full items-center justify-center gap-8 select-none">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width="192"
              height="192"
              quality={100}
              priority={true}
              className="h-32 w-32 sm:h-48 sm:w-48 md:h-52 md:w-52 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute right-0 bottom-[0.35rem] text-3xl sm:text-5xl"
            initial={{ rotate: -30, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="select-text"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold !leading-[2.5rem] sm:!leading-[4rem] md:!leading-[5rem]">
            ROB
            <br />
            HARDING
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold italic">
            <span className="hidden sm:inline-block">Fullstack</span> Web
            Developer
          </h2>
        </motion.div>
      </div>
      <motion.div
        className="select-none flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-10 md:mt-12 w-[10rem] sm:w-[28rem] md:w-[36rem] mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          className={cn(
            buttonVariants({ size: "sm" }),
            "flex flex-1 gap-2 items-center text-xs sm:text-base group"
          )}
          href="/"
        >
          Contact me here{" "}
          <MoveRight className="w-4 h-4 mt-[0.125rem] group-hover:translate-x-1 duration-200" />
        </Link>
        <Link
          className={cn(
            buttonVariants({ size: "sm" }),
            "flex gap-2 flex-1 items-center text-xs sm:text-base bg-white text-foreground hover:bg-gray-100 border-white border-opacity-40 group"
          )}
          href="/"
        >
          Download CV{" "}
          <Download className="w-4 h-4 group-hover:scale-110 duration-200" />
        </Link>
        <Link
          className={cn(
            buttonVariants({ size: "sm" }),
            "bg-white text-foreground hover:bg-gray-100 border-white border-opacity-40"
          )}
          href="/"
        >
          <Linkedin className="w-4 h-4 " />
        </Link>
        <Link
          className={cn(
            buttonVariants({ size: "sm" }),
            "bg-white text-foreground hover:bg-gray-100 border-white border-opacity-40"
          )}
          href="/"
        >
          <Github className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
