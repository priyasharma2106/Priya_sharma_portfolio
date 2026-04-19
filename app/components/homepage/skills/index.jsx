"use client";
// @flow strict

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";

function Skills() {
  return (
    <section id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#1a1a1a]">
      <div className="w-[100px] h-[100px] bg-orange-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20" />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1a1a]" />
          <span className="bg-[#1a1a1a] w-fit text-white p-2 px-5 text-xl rounded-md">Skills</span>
          <span className="w-24 h-[2px] bg-[#1a1a1a]" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-2 sm:px-4 pb-4">
  <div className="rounded-xl border border-[#2a2a2a80] bg-[#111111] p-4 sm:p-6">
          <Marquee
            pauseOnHover
            speed={45}
            gradient={false}
            className="py-2"
          >
            {skillsData.map((skill, id) => (
              <div
                key={id}
                className="mx-3 relative overflow-hidden flex min-w-[140px] items-center gap-3 rounded-lg border border-[#2a2a2a] bg-[#111111] px-4 py-3 transition-all duration-300 hover:border-orange-500"
              >
                <span className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                <Image
                  src={skillsImage(skill)}
                  alt={skill}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <p className="text-sm font-medium text-white">{skill}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Skills;