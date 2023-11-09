import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tennisImg from "@/public/table-tennis.png";
import katikImg from "@/public/katik.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Information Systems student @ UPNVJ",
    location: "Jakarta, Indonesia",
    description:
      "I have been enrolled in the Information Systems program at UPNVJ since 2023. I chose this course to gain a deeper understanding of software technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "iOS Developer",
    location: "Jakarta, Indonesia",
    description:
      "I worked as an iOS developer @ Apple Developer Academy",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "UPONG",
    description:
      "This game has been developed for my educational purposes in teaching programming. It is programmed in C++ and utilizes the Raylib library.",
    tags: ["C++", "Raylib"],
    imageUrl: tennisImg,
  },
  {
    title: "KATIK",
    description:
      "Katik is a versatile mathematical calculator that efficiently computes the area and perimeter of various 2-dimensional shapes.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    imageUrl: katikImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "C",
  "C++",
  "Swift",
  "MySQL",
] as const;