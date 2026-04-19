// @flow strict
import Link from 'next/link';

function Footer() {
  return (
  <div className="relative border-t bg-[#0a0a0a] border-[#2a2a2a] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="text-orange-400">Priya Sharma</span>
          </p>
          <p className="text-xs text-zinc-400 mt-2 md:mt-0">
            Built by Priya Sharma · Portfolio base inspired by{' '}
            <Link target="_blank" href="https://github.com/said7388/developer-portfolio" className="text-orange-400 hover:underline">
              Abu Said
            </Link>
          </p>
        </div>
      </div>
    </div >
  );
};

export default Footer;