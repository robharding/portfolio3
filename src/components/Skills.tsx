"use client";

import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section>
      <SectionHeading>My Skills</SectionHeading>
      <ul
        ref={ref}
        className="flex flex-wrap gap-y-4 gap-x-2 justify-center max-w-[53rem] "
      >
        {skillsData.map((skill, i) => (
          <motion.li
            className="w-[30%] sm:w-[initial] text-center bg-white border border-black/5 rounded p-2"
            key={i}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
