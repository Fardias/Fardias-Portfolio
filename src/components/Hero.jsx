import React from "react";
import { TypeAnimation } from "react-type-animation";
import Midoria from "../assets/pp.jpg";

const Hero = () => {
  return (
    <div className="text-white pb-10 pt-12 mt-14 md:mt-4 relative" id="home">
      <div className="relative">
        <img
          title="untuk sementara pake foto ini dulu (gua jarang foto jir)"
          src={Midoria}
          alt="/"
          className="rounded-full w-[200px] mx-auto mt-20 border-4 border-[#00df9a] md:w-[300px] md:mt-16"
        />
        <i
          title="Saya suka main game"
          className="ri-gamepad-line text-shadow text-7xl absolute top-0 left-5 origin-center rotate-45 z-0 opacity-50 transition duration-300 md:left-[450px] md:text-[100px]"
        ></i>

        <i
          title="Saya suka mendengarkan music"
          class="ri-headphone-fill text-shadow text-6xl absolute bottom-0 left-7 origin-center rotate-45 z-0 opacity-50 transition duration-300 md:left-[450px] md:text-[100px]"
        ></i>
        <i
          title="Ini wajah saya setiap hari"
          class="ri-emotion-normal-line text-shadow text-7xl absolute top-0 right-5 origin-center -rotate-45 z-0 opacity-50 transition duration-300 md:right-[450px] md:text-[100px]"
        ></i>
        <i
          title="Saya suka membuat website"
          class="ri-code-view text-7xl text-shadow absolute right-5 -bottom-2 md:bottom-0 origin-center rotate-45 z-0 opacity-50 transition duration-300 md:right-[450px] md:text-[100px]"
        ></i>
      </div>

      <div className="max-w-[800px] mt-[-230px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] uppercase font-bold p-2 mt-11">
          Halo perkenalkan nama saya
        </p>

        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 uppercase md:-mt-8">
          <span className="text-[#00df9a]">Far</span>dias{" "}
          <span className="text-[#00df9a]">alf</span>athan
        </h1>

        <div className="flex justify-center">
          {/* <Typed
            strings={["Frontend Developer"]}
            typeSpeed={130}
            backSpeed={140}
            loop
            className="md:text-5xl sm:text-4xl text-xl text-slate-500 font-bold pl-2"
          /> */}
          <TypeAnimation className="md:text-5xl sm:text-4xl text-lg text-slate-500 font-bold pl-2"
            sequence={[
              "FRONTEND DEVELOPER",
              1500,
              "",
              100,
              "FRONTEND DEVELOPER",
              1500,
              "",
              100,
            ]}
            
            repeat={Infinity}
          />
        </div>

        <p className="md:text-2xl text-xl font-bold text-gray-500 max-w-md text-center mx-auto mt-3">
          "Working as a frontend developer is a my dream."
        </p>
      </div>
    </div>
  );
};

export default Hero;
