import React from "react";
import Navbar from "./shared/Navbar";
import installcctv from "../images/installcctv.png";
import sale from "../images/sale.png";
import services from "../images/services.png";
import location from "../images/loc.png";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn, MdPhoneIphone } from "react-icons/md";
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="lg:w-4/5 w-full lg:mx-auto my-8 h-auto">
        <h1 className="border-b-2 border-orange-500 text-lg mt-20 lg:mt-10 mb-8 w-56 text-black py-2 text-center mx-auto ">
          خدمات ارتباطی
        </h1>
        <div className="grid lg:grid-cols-3 gap-4 ">
          <div className="my-3 mx-auto">
            <img
              src={installcctv}
              alt="install"
              className="w-[220px] h-[220px] xl:w-[280px] xl:h-[280px] 2xl:w-[280px] 2xl:h-[280px] lg:w-[280px] lg:h-[280px]  "
            />
            <p className="text-center text-lg">درخواست نصاب</p>
          </div>
          <div className="my-3 mx-auto">
            <img
              src={sale}
              alt="sale"
              className="w-[220px] h-[220px] xl:w-[280px] xl:h-[280px] 2xl:w-[280px] 2xl:h-[280px] lg:w-[280px] lg:h-[280px]  "
            />
            <p className="text-center text-lg">مشاوره فروش</p>
          </div>
          <div className="my-3 mx-auto">
            <img
              src={services}
              alt="support"
              className="w-[220px] h-[220px] xl:w-[280px] xl:h-[280px] 2xl:w-[280px] 2xl:h-[280px] lg:w-[280px] lg:h-[280px]  "
            />
            <p className="text-center text-lg">پشتیبانی</p>
          </div>
        </div>
      </div>
      <div className="my-10 mx-auto w-full lg:w-4/5 text-black ">
        <div className="flex-col flex  lg:flex-row-reverse items-center">
          <div>
            <img
              src={location}
              alt="location"
              className="w-[170px] h-[170px]"
            />
          </div>
          <div className="flex-col items-center ">
            <div className="flex my-4 lg:justify-end justify-center items-center">
              <span className="mr-1 text-center">
                کرمان خیابان ابوذر شمالی بین کوچه 65 و 67
              </span>
              <MdOutlineLocationOn size={25} className="text-blue-50" />
            </div>
            <div className="flex lg:justify-end justify-center items-center my-4 mr-1">
              <span className="mr-1">0913 198 0728</span>
              <MdPhoneIphone size={25} className="text-blue-50" />
            </div>
            <div className="flex lg:justify-end justify-center items-center my-4 mr-1">
              <span className="mr-1">034 3252 3720</span>
              <AiOutlinePhone size={25} className="text-blue-50" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
