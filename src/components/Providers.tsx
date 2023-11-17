"use client";

import { links } from "@/lib/data";
import { FC, createContext, useEffect, useState } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export const ActiveSectionContext = createContext({
  activeSection: "Home",
  click: (section: (typeof links)[number]["name"]) => {},
  hover: (section: (typeof links)[number]["name"]) => {},
});

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [clickedSection, setClickedSection] = useState<
    null | (typeof links)[number]["name"]
  >(null);
  const [activeSection, setActiveSection] =
    useState<(typeof links)[number]["name"]>("Home");

  const click = (section: (typeof links)[number]["name"]) => {
    setClickedSection(section);
    setActiveSection(section);
  };

  const hover = (section: (typeof links)[number]["name"]) => {
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
