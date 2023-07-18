import React from "react";
import AboutImg from "../assets/about.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 rounded-full border-8 border-[#00df9a]" src={AboutImg} alt="/" />
        <div className="felx flex-col justify-center md:my-[80px]">
          <h1 className="md:text-6xl uppercase text-[#00df9a] sm:text-3xl text-2xl font-bold py-2">
            Tentang saya
          </h1>
          <p className="md:text-2xl text-xl font-bold text-gray-500 ">
          Halo! Nama saya Fardias Alfathan, dan saya senang menyambut Anda di website saya. Saya adalah seorang Frontend Developer dengan minat yang luas dalam Pembuatan Website.
          </p>
          <p className="md:text-2xl text-xl font-bold text-gray-500   mt-3 pb-10">Saya seorang Mahasiswa <a target="_blank"  rel="noreferrer"  href="https://www.budiluhur.ac.id/" className="text-blue-600 hover:underline">Universitas Budi Luhur.</a>Jurusan Teknik Informatika,Saya masuk jurusan ini karena ingin belajar dan mempelajari hal baru dalam dunia IT.Khusunya dalam pembuatan website.</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
