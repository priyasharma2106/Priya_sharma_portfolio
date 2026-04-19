"use client";
// @flow strict

import { useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <style>{`
        .rotating-word {
          display: flex;
          align-items: center;
          inset: 0;
          position: absolute;
          animation: swingRotate 9s infinite;
          transform-origin: top center;
          backface-visibility: hidden;
          line-height: 1.25;
        }
        .rotating-word:nth-child(2) { animation-delay: 3s; }
        .rotating-word:nth-child(3) { animation-delay: 6s; }
        @keyframes swingRotate {
          0%   { opacity: 0; transform: rotateX(90deg); }
          8%   { opacity: 1; transform: rotateX(0deg); }
          30%  { opacity: 1; transform: rotateX(0deg); }
          38%  { opacity: 0; transform: rotateX(-90deg); }
          100% { opacity: 0; transform: rotateX(-90deg); }
        }
        .swing-gradient {
          background: linear-gradient(90deg, #f97316, #ea580c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">

          <div
            className="main relative h-28 sm:h-32 w-full max-w-2xl bg-transparent flex items-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
          >
            <div
              className={`cursor h-16 w-16 bg-white mix-blend-difference rounded-full absolute transition-all duration-200 ease-linear pointer-events-none ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: `translate(${cursorPos.x - 32}px, ${cursorPos.y - 32}px)`,
              }}
            />
            <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
              Hello, I&apos;m <span className="text-orange-500">{personalData.name}</span>
            </h1>
          </div>

          <div className="flex items-center flex-wrap gap-2 mt-4 mb-2">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">A Developer Who</span>
            <div className="relative h-12 sm:h-14 lg:h-16 w-64 sm:w-80 overflow-hidden" style={{ perspective: '1000px' }}>
              <span className="rotating-word swing-gradient text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.25]">Data. Models. Code.</span>
              <span className="rotating-word swing-gradient text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.25]">Analyze. Predict. Build.</span>
              <span className="rotating-word swing-gradient text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.25]">Question. Explore. Ship.</span>
            </div>
          </div>

          <p className="text-sm lg:text-base text-orange-400 mt-2 mb-6 font-medium">
            {personalData.designation}
          </p>

          <div className="my-6 flex items-center gap-5">
            <Link href={personalData.github} target='_blank'
              className="transition-all text-orange-500 hover:scale-125 duration-300">
              <BsGithub size={30} />
            </Link>
            <Link href={personalData.linkedIn} target='_blank'
              className="transition-all text-orange-500 hover:scale-125 duration-300">
              <BsLinkedin size={30} />
            </Link>
            <Link href={personalData.leetcode} target='_blank'
              className="transition-all text-orange-500 hover:scale-125 duration-300">
              <SiLeetcode size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r from-orange-500 to-orange-700 p-[1px] rounded-full transition-all duration-300 hover:from-orange-400 hover:to-orange-600 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0a0a0a] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold hover:from-orange-400 hover:to-orange-600 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]"
              role="button" target="_blank" href={personalData.resume}>
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

  <div className="order-1 lg:order-2 from-[#0a0a0a] border-[#2a2a2a80] relative rounded-lg border bg-gradient-to-r to-[#111111]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500 to-orange-700"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-orange-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-orange-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-orange-500">const</span>
                <span className="mr-2 text-white">priya</span>
                <span className="mr-2 text-orange-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-orange-200">Priya Sharma</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">focus:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-orange-200">Data Analytics</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-orange-200">Machine Learning</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-orange-200">Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-orange-200">Full Stack</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-orange-200">Agentic AI</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">dataObsessed:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-orange-300">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-orange-200">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-orange-300">this.</span>
                <span className="mr-2 text-white">dataObsessed</span>
                <span className="text-orange-200">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-orange-300">this.</span>
                <span className="mr-2 text-white">focus.length</span>
                <span className="mr-2 text-orange-200">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 