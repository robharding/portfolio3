"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FC, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

interface ProjectProps {
  project: (typeof projectsData)[number];
}

const Project: FC<ProjectProps> = ({ project }) => {
  const { title, description, tags, imageUrl } = project;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      <section className="relative bg-gray-100 hover:bg-gray-200 cursor-pointer transition max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] rounded-[1rem] ">
        <div className="h-full flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] group-even:sm:translate-x-[100%]">
          <h4 className="text-2xl font-semibold">{title}</h4>
          <p className="pt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-[1rem] group-even::right[initial] group-even:-left-40 group-hover:-translate-x-3 group-odd:group-hover:translate-x-3 group-hover:translate-y-3 group-odd:group-hover:-rotate-2 group-even:group-hover:rotate-2 group-hover:scale-[1.1] transition"
          src={imageUrl}
          alt="Project image"
          quality={95}
        />
      </section>
    </motion.div>
  );
};

export default Project;
