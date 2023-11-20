import { FC } from "react";
import SectionHeading from "./SectionHeading";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <section id="experience" className="scroll-mt-16 sm:scroll-mt-28">
      <SectionHeading>My Experience</SectionHeading>
    </section>
  );
};

export default Experience;
