import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: FC<
  SectionHeadingProps & React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, className }) => {
  return (
    <h3 className={cn("text-3xl font-medium mb-8 text-center", className)}>
      {children}
    </h3>
  );
};

export default SectionHeading;
