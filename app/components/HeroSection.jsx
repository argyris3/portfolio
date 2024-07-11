'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-transparent mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600  ">
            I'am Argyrios
            <br />
            <TypeAnimation
              sequence={['A Web Developer', 1000, 'A Mobile Developer', 1000, 'UI/UX Designer', 1000]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl">
            A freelance full-stack web developer with years of experience using React and NodeJS...
          </p>
          <div>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
              <Link
                href="https://cv-argyrios.netlify.app"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 "
              >
                Download CV
              </Link>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mb-6 mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative">
            <Image
              src="/images/img1.jpg"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
