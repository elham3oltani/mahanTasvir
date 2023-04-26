import React from "react";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { FaShippingFast } from "react-icons/fa";
import {BsFillCreditCard2FrontFill} from "react-icons/bs"
import cheque from "../images/cheque.png"
const Services = () => {
  return (

    <div className="w-full lg:h-[120px] bg-blue-500 lg:my-8 my-4 box-border">
      <div className="lg:flex grid grid-cols-2 justify-evenly items-center text-white py-2 lg:text-lg xl:text-lg">
        <div className="flex flex-col justify-center items-center mobile:my-2">
          <img
            src={cheque}
            className="h-[40px] w-[40px] mb-2 text-white "
            alt="cheque"
          />
          <p className="text-sm lg:text-lg">فروش اعتباری  60 روزه</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaShippingFast size={45} className="mb-2 h-[40px] w-[40px]" />
          <p className="text-sm lg:text-lg">ارسال به تمام نقاط کشور</p>
        </div>
        <div className="flex justify-center  mobile:text-center items-center flex-col">
          <HiWrenchScrewdriver size={45} className="mb-2 h-[40px] w-[40px]" />
          <p className="text-sm lg:text-lg">نصب در محدوده ی استان کرمان</p>
        </div>

        <div className="flex justify-center items-center mobile:text-center flex-col">
          <BsFillCreditCard2FrontFill size={45} className="mb-2 h-[40px] w-[40px]" />
          <p className="text-sm lg:text-lg">تنوع در روش های پرداخت،پرداخت آنلاین،کارت به کارت یا در محل</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
