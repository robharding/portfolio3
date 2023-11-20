import React, { FC } from "react";

import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <section
      className="scroll-mt-16 sm:scroll-mt-28 mb-16 sm:mb-28"
      id="projects"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
