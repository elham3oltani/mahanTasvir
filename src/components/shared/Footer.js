import React, { useContext } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import {
  MdOutlineMarkEmailRead,
  MdOutlineAccessTime,
  MdManageAccounts,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import namadELE from "../../images/namad.png";
import namadmeli from "../../images/namadmeli.png";
import { ProductsContext } from "../../context/ProductContextProvider";

const Footer = () => {
  const products = useContext(ProductsContext);
  const NavItem = products[2];
  return (
    <>
      <div className="w-full grid lg:flex 2xl:text-md justify-evenly lg:flex-row-reverse text-white bg-black-50 lg:h-[290px] h-auto">
        <div className="">
          <h1 className="text-[21px] text-center my-6 text-orange-500">
            ارتباط با ما
          </h1>
          <div className="flex my-4 lg:justify-end justify-center items-center">
            <span className="mr-1">
              کرمان خیابان ابوذر شمالی بین کوچه 65 و 67
            </span>
            <MdOutlineLocationOn size={25} className="text-blue-50" />
          </div>
          <div className="flex lg:justify-end justify-center items-center my-4 mr-1">
            <span className="mr-1">0913 198 0728</span>
            <AiOutlinePhone size={25} className="text-blue-50" />
          </div>
          <div className="flex lg:justify-end justify-center items-center mr-1">
            <span className="mr-1 font-Nunito">
              meysam.teymori.63@gmail.com
            </span>
            <MdOutlineMarkEmailRead size={25} className="text-blue-50" />
          </div>

          <div className="flex lg:justify-end justify-center my-4 items-center mr-1">
            <span className="mr-3">عصرها 16 الی 20</span>{" "}
            <span className="mr-1">ساعت 9 صبح الی 13:30</span>
            <MdOutlineAccessTime size={25} className="text-blue-50" />
          </div>

          <div className="flex lg:justify-end justify-center my-4 items-center mr-1">
            <span className="mr-1">مدیریت مهندس تیموری</span>
            <MdManageAccounts size={25} className="text-blue-50" />
          </div>
        </div>

        <div className="">
          <h1 className="text-[21px] text-center text-orange-500 my-6">
            لینک های مفید
          </h1>
          <ul className="text-center">
            {NavItem?.map((item) => (
              <li
                key={item.id}
                className=" flex items-center lg:justify-end my-3 justify-center mr-1"
              >
                <Link
                  className="mr-1"
                  key={item.id}
                  to={`/product/${item.slug}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h1 className="text-[21px] text-center my-6">نماد الکترونیک</h1>
          <div className="flex items-center justify-center bg-white ">
            <img
              src={namadELE}
              className="w-[150px] h-[100px] mx-auto"
              alt="namad etmad"
            />
          </div>
        </div>
        <div>
          <h1 className="text-[21px] text-center my-6">نماد اعتماد</h1>
          <div className="flex items-center justify-center bg-white my-6 ">
            <img
              src={namadmeli}
              className="w-[250px] h-[150px]"
              alt="namad sabt meli"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto text-right flex flex-col justify-center items-center md:flex-row-reverse lg:flex-row-reverse md:justify-between lg:justify-between bg-orange-500  ">
        <p className="lg:text-[16px] mr-4 text-white py-3">
          کلیه ی حقوق مادی و معنوی متعلق به فروشگاه ماهان تصویر بوده و برای این
          سایت محفوظ میباشد
        </p>
        <div className="flex items-center text-white py-3">
          <Link>
            <GrInstagram className="mx-4" size={20} />
          </Link>
          <Link>
            <FaTelegram size={20} />
          </Link>
          <Link>
            {" "}
            <FaTwitter size={20} className="mx-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
