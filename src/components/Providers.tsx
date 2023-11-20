"use client";

import { FC, createContext, useState } from "react";

import { SectionName } from "@/lib/types";

interface ProvidersProps {
  children: React.ReactNode;
}

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
