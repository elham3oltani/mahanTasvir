import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaUserEdit } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import Navbar from "../shared/Navbar";
import axios from "axios";
const UserPannel = () => {
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");
  console.log(pathname);
  const navigate = useNavigate();

useEffect(()=>{
  const dashboardHandler = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("isActive")) {
      try {
        const res = await axios.get("https://mahantasvir.ir/panel/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log({ res });
      } catch (e) {
        console.log(e.response);
      }
    } else {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };
  dashboardHandler()
})
  let userName = localStorage.getItem("info");

  return (
    <>
      <Navbar />
      <div className="w-full lg:w-5/6 h-1/2 mx-auto flex-col flex lg:flex-row-reverse lg:my-16 my-16">
        <div className="">
          <div className="w-full text-right overflow-hidden px-4">
            <div className="flex items-center flex-row-reverse rounded-md border border-blue-500 px-2 py-3 mb-2">
              <FaUser />
              <h3 className="px-1 font-Quicksand mr-1.5">
                {" "}
                {JSON.parse(userName)}
              </h3>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:flex flex-col text-sm">
              <li className=" bg-blue-10 px-2 py-3 rounded-md flex items-center flex-row-reverse cursor-pointer">
                <RxDashboard className="px-1 text-green-500" size={30} />

                <Link to="dashboard">پیشخوان</Link>
              </li>

              <li className="bg-blue-10 px-2 py-3 rounded-md flex items-center flex-row-reverse cursor-pointer">
                <RiShoppingBasket2Line
                  className="px-1 text-orange-500"
                  size={30}
                />
                <Link to="myOrders">سفارش ها</Link>
              </li>

              <li className="bg-blue-10 px-2 py-3 rounded-md flex items-center flex-row-reverse cursor-pointer">
                <GrContactInfo className="px-1 text-purple-100" size={30} />
                <Link to="info-account"> اطلاعات کاربری</Link>
              </li>

              <li className="bg-blue-10 px-2 py-3 rounded-md flex items-center flex-row-reverse cursor-pointer">
                <MdOutlineFavoriteBorder className="px-1 text-red" size={30} />
                <Link to="AddtoFavorite">لیست علاقه مندی ها</Link>
              </li>
              <li className="bg-blue-10 px-2 py-3 overflow-hidden rounded-md flex items-center flex-row-reverse cursor-pointer">
                <FaUserEdit className="px-1 text-purple-50" size={30} />

                <Link
                  to="edit-account"
                 
                >
                  ویرایش اطلاعات کاربر
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-4/5 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserPannel;
