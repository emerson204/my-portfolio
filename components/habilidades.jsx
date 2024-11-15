import React from "react";
import HeaderTitle from "./header-title";
import { dataSkills } from "@/data/skills-data";

export default function Habilidades() {
  return (
    <section
      className="py-10 px-5 scroll-mt-[2rem]"
      id="skills"
      data-aos="fade-right"
    >
      <HeaderTitle
        title="Habilidades"
        descripcion="Dominando tecnologías para construir el futuro."
      />

      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-7 md:gap-x-20 md:gap-y-10 text-5xl text-center">
        {dataSkills.map((skill) => (
          <span key={skill.id} className={skill.className}>
            {skill.icon}
          </span>
        ))}
      </div>
    </section>
  );
}
