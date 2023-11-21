"use client";

import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  const ref = useRef<HTMLUListElement>(null);

  return (
    <section
      id="skills"
      className="scroll-mt-16 sm:scroll-mt-28 mb-16 sm:mb-28"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul
        ref={ref}
        className="flex flex-wrap gap-2 justify-center max-w-[53rem] text-xs sm:text-base"
      >
        {skillsData.map((skill, i) => (
          <motion.li
            className="w-[30%] sm:w-[initial] text-center bg-white border border-black/[0.1] rounded-[0.8rem] px-5 py-3"
            key={i}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
