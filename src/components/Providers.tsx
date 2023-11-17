"use client";

import { links } from "@/lib/data";
import { FC, createContext, useEffect, useState } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

type SectionName = (typeof links)[number]["name"];

export const ActiveSectionContext = createContext({
  activeSection: "Home",
  click: (section: SectionName) => {},
  hover: (section: SectionName) => {},
});

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [clickedSection, setClickedSection] = useState<null | SectionName>();
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  const click = (section: SectionName) => {
    setClickedSection(section);
    setActiveSection(section);
  };

  const hover = (section: SectionName) => {
    if (clickedSection && section == clickedSection) {
      setClickedSection(null);
      return;
    } else if (clickedSection) {
      return;
    } else {
      setActiveSection(section);
    }
  };

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        click,
        hover,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default Providers;
