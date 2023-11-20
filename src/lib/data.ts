import React from "react";
import { ActivitySquare, Briefcase, CableCar } from "lucide-react";

import corpcommentImg from "../../public/images/quill.png";
import rmtdevImg from "../../public/images/rmtdev.png";
import wordanalyticsImg from "../../public/images/wordanalytics.png";

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

export const projectsData = [
  {
    title: "Quill",
    description:
      "A SaaS that allows users to upload PDFs and chat with an AI in real time.",
    tags: ["React", "Next.js", "OpenAI", "S3", "Stripe", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "CulinaryWizard",
    description:
      "A SaaS app that simplifies blog post recipes using gpt-4 and allows users to save and share recipes.",
    tags: ["React", "Nextjs", "OpenAI", "Tailwind", "Prisma"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Breadit",
    description:
      "A social media app similar to reddit that allows users to post, comment, like, create posts, and create communities.",
    tags: ["React", "Next.js", "Redis", "Auth.js", "Tailwind", "Prisma"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Node.js",
  "Redis",
  "CI/CD",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Redux",
  "GraphQL",
  "Express",
  "Python",
  "Django",
  "Framer Motion",
] as const;
