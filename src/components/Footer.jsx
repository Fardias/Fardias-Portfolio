import React from "react";
import Deku2 from "../assets/deku2.jpg";
import Deku3 from "../assets/deku3.jpg";
import Deku1 from "../assets/dekuColSpan2.jpg"
import Deku4 from "../assets/dekuColspan2_2.jpg"

import {
  FaYoutube,

  FaTiktok,
 
} from "react-icons/fa";

import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div id="sosmed" className="max-w-[1240px] mx-auto px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
        <div className="">
          <h1 className="w-full text-3xl font-bold text-[#00df9a] pt-10">
            FARALF.
          </h1>
          <p className="py-4">
            Terimakasih sudah mengunjungi website portfolioku yang masih dalam
            tahap pengembangan ini, saya harap anda dapat memberikan kritik dan
            saran untuk website ini kedepannya.Jika ada yang mau di sampaikan
            langsung aja ke Sosial Media saya.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fardias1/" className="hover:text-[#00df9a]"><AiFillInstagram size={30} /></a>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@diasfathan" className="hover:text-[#00df9a]"><FaTiktok size={30} /></a>
            <a target="_blank" rel="noreferrer" href="https://wa.me/6287882355688" className="hover:text-[#00df9a]"><AiOutlineWhatsApp size={30} /></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Fardias" className="hover:text-[#00df9a]"><AiFillGithub size={30} /></a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@fardiasyt5681/videos" className="hover:text-[#00df9a]"><FaYoutube size={30} /></a>
          </div>
        </div>
        <div className="md:grid grid-cols-3 pt-10 gap-5 pb-24 hidden">
          <img
            src={Deku1}
            alt=""
            className="col-span-2 w-[400px] h-40 object-[center] object-cover border-4 border-[#00df9a] rounded-xl"
          />
          <img
            src={Deku2}
            alt=""
            className="h-40 border-4 border-[#00df9a] rounded-xl"
          />
          <img
            src={Deku3}
            alt=""
            className="h-40 border-4 border-[#00df9a] rounded-xl"
          />
          <img
            src={Deku4}
            alt=""
            className="col-span-2 w-[400px] h-40 object-[center] object-cover border-4 border-[#00df9a] rounded-xl"
          />
        </div>
        {/* <div className='lg:col-span-2 flex justify-between mt-6 text-center'> */}
        {/* <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
    <h6 className='font-medium text-gray-400'>Support</h6>
    <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
            </ul>
            </div>
            <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
            </ul>
          </div> */}

        {/* </div> */}
      </div>
      <h1 className="mt-14 md:mt-0 pb-10 text-center md:mb-10t text-white">
        &copy; 2023 Faralf | All Rights Reserved
      </h1>
    </>
  );
};

export default Footer;
