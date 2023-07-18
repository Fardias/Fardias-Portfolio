import React from "react";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPhp,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";

const emojis = [
  [<i className="ri-html5-line text-orange-500"></i>, "HTML", "INTERMEDIATE"],
  [<i className="ri-css3-fill text-blue-500"></i>, "CSS", "INTERMEDIATE"],
  [
    <i className="ri-javascript-fill text-yellow-300"></i>,
    "JAVASCRIPT",
    "INTERMEDIATE",
  ],
  [<SiTailwindcss className="text-[#00df9a]" />, "TAILWIND", "INTERMEDIATE"],
  [<SiNodedotjs className="text-blue-600" />, "NODE.JS", "BEGINNER"],
  [<i class="ri-reactjs-line text-blue-400"></i>, " REACT.JS", "INTERMEDIATE"],
  [<SiNextdotjs className="text-[#000000]" />, "NEXT.JS", "-"],
  [<SiPhp className="text-blue-600" />, "PHP", "-"],
  [<SiMysql className="text-blue-600" />, "MYSQL", "-"],
];
const Carousel = () => {
  return (
    <div className="">
    <div className="relative">
      <div className="z-10 md:pt-10 md:-mt-12">
        <h1 className="md:text-6xl uppercase text-[#00df9a] sm:text-3xl text-2xl font-bold py-2 mt-10 text-center">
          Kemampuan saya
        </h1>{" "}
      </div>
      <div className="wrapper mt-52 md:mt-64 pb-60">
        <div className="carousel">
          {emojis.map((i, index) => (
            <div className="carousel__item" key={index}>
              <div className="carousel__item-head">{i[0]}</div>
              <div className="carousel__item-body">
                <p className="title  font-bold">{i[1]}</p>
                <p className="">{i[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
   
    </div>
  );
};

export default Carousel;
