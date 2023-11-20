"use client";

import { FC, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ActiveSectionContext } from "./Providers";
import { SectionName } from "@/lib/types";

interface SectionWrapperProps {
  children: React.ReactNode;
  name: SectionName;
  threshold?: number;
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  name,
  threshold,
}) => {
  const { hover: setActiveSection } = useContext(ActiveSectionContext);

  const { ref, inView } = useInView({
    threshold: threshold || 1,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(name);
    }
  }, [inView, setActiveSection, name]);

  return <div ref={ref}>{children}</div>;
};

export default SectionWrapper;
