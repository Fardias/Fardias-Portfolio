import React from "react";
import comming from "../assets/comming_soon.png";

const Project = () => {
  return (
    <div id="project">
      <div className="w-full bg-white py-16 px-4 pt-36">
        <h1 className="md:text-6xl uppercase text-[#00df9a] sm:text-3xl text-2xl font-bold py-2 text-center -mt-28 mb-5 md:mt-10">
          Proyek Saya
        </h1>
        {/* grid md:grid-cols-3 gap-2 */}
        <div className="max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-2">
          <div className="flex flex-col justify-center md:my-[80px] bg-[#000300] py-4 rounded-xl shadow-lg md:mx-5 mb-5">
            <div className=" text-white px-4 md:mx-2">
              <img
                src={comming}
                alt=""
                className="w-[320px] mx-auto rounded-lg"
              />
              <h1 className="md:text-3xl uppercase text-[#00df9a] sm:text-3xl text-2xl font-bold mt-5">
                Proyek 1
              </h1>
              <p className="md:text-lg text-xl font-bold text-gray-500 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                veniam.
              </p>
              <a
                href="/"
                className="py-4 px-4 inline-block mt-3 text-black rounded-xl bg-[#00df9a] font-bold hover:opacity-80"
              >
                Kunjungi Website
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center md:my-[80px] bg-[#000300] py-4 rounded-xl shadow-lg md:mx-5  mb-5">
            <div className=" text-white px-4 md:mx-2">
              <img
                src={comming}
                alt=""
                className="w-[320px] mx-auto rounded-lg"
              />
              <h1 className="md:text-3xl uppercase text-[#00df9a] sm:text-3xl text-2xl font-bold mt-5">
                Proyek 2
              </h1>
              <p className="md:text-lg text-xl font-bold text-gray-500 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                veniam.
              </p>
              <a
                href="/"
                className="py-4 px-4 inline-block mt-3 text-black rounded-xl bg-[#00df9a] font-bold hover:opacity-80"
              >
                Kunjungi Website
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center md:my-[80px] bg-[#000300] py-4 rounded-xl shadow-lg md:mx-5  mb-5">
            <div className=" text-white px-4 md:mx-2">
              <img
                src={comming}
                alt=""
                className="w-[320px] mx-auto rounded-lg"
              />
              <h1 className="md:text-3xl uppercase text-[#00df9a] sm:text-3xl text-2xl font-bold mt-5">
                Proyek 3
              </h1>
              <p className="md:text-lg text-xl font-bold text-gray-500 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                veniam.
              </p>
              <a
                href="/"
                className="py-4 px-4 inline-block mt-3 text-black rounded-xl bg-[#00df9a] font-bold hover:opacity-80"
              >
                Kunjungi Website
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center md:my-[80px] bg-[#000300] py-4 rounded-xl shadow-lg md:mx-5 mb-5 ">
            <div className=" text-white px-4 md:mx-2">
              <img
                src={comming}
                alt=""
                className="w-[320px] mx-auto rounded-lg"
              />
              <h1 className="md:text-3xl uppercase text-[#00df9a] sm:text-3xl text-2xl font-bold mt-5">
                Proyek 4
              </h1>
              <p className="md:text-lg text-xl font-bold text-gray-500 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                veniam.
              </p>
              <a
                href="/"
                className="py-4 px-4 inline-block mt-3 text-black rounded-xl bg-[#00df9a] font-bold hover:opacity-80"
              >
                Kunjungi Website
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center md:my-[80px] bg-[#000300] py-4 rounded-xl shadow-lg md:mx-5  mb-5">
            <div className=" text-white px-4 md:mx-2">
              <img
                src={comming}
                alt=""
                className="w-[320px] mx-auto rounded-lg"
              />
              <h1 className="md:text-3xl uppercase text-[#00df9a] sm:text-3xl text-2xl font-bold mt-5">
                Proyek 5
              </h1>
              <p className="md:text-lg text-xl font-bold text-gray-500 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                veniam.
              </p>
              <a
                href="/"
                className="py-4 px-4 inline-block mt-3 text-black rounded-xl bg-[#00df9a] font-bold hover:opacity-80"
              >
                Kunjungi Website
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center md:my-[80px] bg-[#000300] py-4 rounded-xl shadow-lg md:mx-5 mb-5">
            <div className=" text-white px-4 md:mx-2">
              <img
                src={comming}
                alt=""
                className="w-[320px] mx-auto rounded-lg"
              />
              <h1 className="md:text-3xl uppercase text-[#00df9a] sm:text-3xl text-2xl font-bold mt-5">
                Proyek 6
              </h1>
              <p className="md:text-lg text-xl font-bold text-gray-500 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                veniam.
              </p>
              <a
                href="/"
                className="py-4 px-4 inline-block mt-3 text-black rounded-xl bg-[#00df9a] font-bold hover:opacity-80"
              >
                Kunjungi Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
