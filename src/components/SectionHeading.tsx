import { FC } from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return <h3 className="text-3xl font-medium mb-8 text-center">{children}</h3>;
};

export default SectionHeading;
