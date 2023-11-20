"use client";

import { FC } from "react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <motion.section
      className="max-w-[45rem] leading-7 mb-16 sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <Balancer className="text-center">
        <p className="mb-3">
          After graduating with a degree in{" "}
          <span className="font-semibold">Computer Science</span> from Wilfrid
          Laurier University, I decided to pursue my passion for programming.
          Over the past year I&apos;ve since furthered my skills by building
          multiple complex applications to show off on my portfolio.{" "}
        </p>
        <p className="mb-3">
          My <span className="italic">favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out the solution to a problem. My core
          stack is <span className="font-semibold">Typescript</span>,{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Nextjs</span>,{" "}
          <span className="font-semibold">Node.js</span>, and{" "}
          <span className="font-semibold">Prisma</span>, but I&apos;m always
          looking to learn something new and love a challenge. I&apos;m
          currently searching for a{" "}
          <span className="font-semibold">full-time position</span> as a
          software developer.
        </p>
        <p>
          <span className="italic">When I&apos;m not coding</span>, I love to
          ski, play video games, or wind down by the fire with a book. Currently
          I&apos;m reading <span className="italic">The Name of the Wind</span>{" "}
          by Patrick Rothfuss.
        </p>
      </Balancer>
    </motion.section>
  );
};

export default About;
