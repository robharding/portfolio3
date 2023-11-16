import React from "react";
import { ActivitySquare, Briefcase, CableCar } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer Intern",
    location: "Waterloo, Ontario",
    description:
      "While in my second year of studies, I interned at a Y-Combinator startup for 5 months.",
    icon: React.createElement(ActivitySquare),
    date: "2018",
  },
  {
    title: "Graduated from Wilfrid Laurier University",
    location: "Waterloo, Ontario",
    description:
      "I graduated with a Bachelor of Science (BSc) majoring in Computer Science",
    icon: React.createElement(Briefcase),
    date: "2021",
  },
  {
    title: "Working Vacation & Solo Projects",
    location: "Fernie, BC",
    description:
      "I Spent a year working in the mountains while improving my web development skills through personal projects.",
    icon: React.createElement(CableCar),
    date: "2022 - present",
  },
] as const;
