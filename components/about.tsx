"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a dedicated and passionate student enrolled at UPN "Veteran"
        Jakarta, where I'm pursuing my academic studies. Additionally, I have
        the privilege of being part of the{" "}
        <span className="font-medium">Apple Developer Academy</span>, an
        institution that enables me to immerse myself in the world of app
        development.{" "}
      </p>

      <p className="mb-3">
        As a fervent learner, my current focus revolves around various
        programming languages and concepts. I am diligently working on improving
        my skills in programming languages such as{" "}
        <span className="font-medium">C, C++, Swift</span>. These languages are
        not only versatile but also play pivotal roles in software development
        and application creation.{" "}
      </p>

      <p className="mb-3">
        Beyond programming, I am also deeply engrossed in understanding{" "}
        <span className="font-medium">databases, data structures,</span>
        and the intricacies of working with{" "}
        <span className="font-medium">APIs</span> (Application Programming
        Interfaces) These are fundamental aspects of modern technology, and I
        believe that a strong grasp of these concepts will enable me to build
        efficient, innovative, and practical solutions in the tech industry.{" "}
      </p>

      <p>
        In essence, I am on a continuous journey to expand my knowledge and
        expertise in the world of technology. I am driven by a profound
        enthusiasm for learning and creating cutting-edge technological
        solutions that can positively impact our lives and the digital landscape
        as a whole.{" "}
      </p>
    </motion.section>
  );
}
