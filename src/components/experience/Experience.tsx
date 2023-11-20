"use client";

import React, { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeading from "../SectionHeading";
import { experiencesData } from "@/lib/data";
import ExperienceItem from "./ExperienceItem";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <section id="experience" className="scroll-mt-16 sm:scroll-mt-28">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="" className="h-fit">
        {experiencesData.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
