"use client";

import React, { FC, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ActiveSectionContext } from "./Providers";
import { SectionName } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  name: SectionName;
  threshold?: number;
}

const SectionWrapper: FC<
  SectionWrapperProps & React.HTMLAttributes<HTMLElement>
> = ({ children, name, threshold, className }) => {
  const { hover: setActiveSection } = useContext(ActiveSectionContext);

  const { ref, inView } = useInView({
    threshold: threshold || 0.75,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(name);
    }
  }, [inView, setActiveSection, name]);

  return (
    <div ref={ref} className={cn("w-full flex justify-center px-4", className)}>
      {children}
    </div>
  );
};

export default SectionWrapper;
