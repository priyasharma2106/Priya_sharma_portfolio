// @flow strict
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";


function Navbar() {
  return (
    <nav className="bg-[#0a0a0a] border-b border-[#2a2a2a]">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-orange-400 text-3xl font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.35)]">
            {personalData.name}
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.45)]">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#achievements"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.45)]">ACHIEVEMENTS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.45)]">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.45)]">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.45)]">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;