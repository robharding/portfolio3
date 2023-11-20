"use client";

import { experiencesData } from "@/lib/data";
import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface ExperienceItemProps {
  item: (typeof experiencesData)[number];
}

const ExperienceItem: FC<ExperienceItemProps> = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement visible={inView}>
        <h3>{item.title}</h3>
        <p>{item.location}</p>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

export default ExperienceItem;
