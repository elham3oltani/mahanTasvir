import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logoo from "../../images/logoo.png";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { ImSpinner6 } from "react-icons/im";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { ProductsContext } from "../../context/ProductContextProvider.js";
import { CartContext } from "../../context/CartContextProvider";
const Navbar = ({ styleOnBanner }) => {
  const [nav, setNav] = useState(true);
  const [pannel, setPannel] = useState(false);
  let { state } = useContext(CartContext);
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");
  const handlepannel = () => {
    setPannel(!pannel);
  };
  const handleNavbar = () => {
    setNav(!nav);
  };

  useEffect(
    () => {
      setNav(!nav);
    },
    [pathname],
    [!nav]
  );

  useEffect(() => {});
  const products = useContext(ProductsContext);
  const navbarItems = products[2];
  const logOut = () => {
    localStorage.clear();
  };
  let userName = localStorage.getItem("info");
  let isActive = localStorage.getItem("isActive");

  return (
    <>
      <div
        className={`${
          styleOnBanner
            ? "lg:h-[400px] xl:h-[600px] w-full text-white lg:bg-black lg:bg-gradient-to-b xl:from-black lg:from-black md:from-black md:to-transparent lg:to-transparent xl:to-transparent lg:bg-opacity-0 xl:bg-opacity-0 lg:absolute z-10"
            : "lg:text-black shadow-md mx-2 rounded-lg"
        }`}
      >
        {/* navbar in web */}
        <div className="max-w-[1640px] w-full shadow-lg flex items-center h-auto lg:justify-around mx-auto lg:border-b box-border relative border-gray xl:py-2 lg:py-2">
          <div className="lg:flex xl:flex hidden items-center justify-between">
            <div className="pr-2 relative">
              <Link to="/shopcart">
                <AiOutlineShoppingCart className="mobile:text-[27px]" />
                <span className="absolute bg-orange-500 bottom-5 text-white left-6 mobile:h-3.5 mobile:w-3.5 mobile:text-[13px] rounded-full z-10 lg:w-4 lg:h-4 pt-1  flex justify-center items-center">
                  {state.itemsCounter}
                </span>
              </Link>
            </div>
            {!!isActive ? (
              <div>
                <div className="rounded-full border-white-full border mx-4 lg:text-[16px] text-[14px] flex items-center p-1 lg:p-1">
                  <span
                    className={`${
                      styleOnBanner
                        ? "text-white px-1.5 py-1 rounded-full"
                        : "text-black px-1.5 "
                    }`}
                  >
                    <Link to="/signUp" target="_blank">
                      ثبت نام
                    </Link>
                  </span>
                  <span className="text-white bg-orange-500 rounded-full px-4 py-1">
                    {" "}
                    <Link to="/login" target="_blank" className="">
                      ورود
                    </Link>
                  </span>
                </div>
              </div>
            ) : (
              <div
                onClick={handlepannel}
                className="rounded-full cursor-pointer border-white border mx-4 lg:text-[16px] text-[14px] flex items-center p-1 lg:p-1"
              >
                <span
                  className={`${
                    styleOnBanner
                      ? "text-white py-1 pr-1 rounded-full flex items-center"
                      : "text-black px-2 py-2 rounded-full flex items-center border border-black"
                  }`}
                >
                  <FaUser className="mx-2" />
                  <IoIosArrowDown className="" />
                </span>
              </div>
            )}

            <div className="relative">
              <div className="absolute z-20 mt-4 -right-6">
                {pannel ? (
                  <ul className="px-2 mt-5 text-black py-2 bg-white rounded-md p-3 shadow-lg">
                    <li className="w-32 py-1.5 bg-white items-center my-1  border-orange-500 transition-all duration-200 ease-in-out rounded-md shadow-orange-500 hover:drop-shadow-lg">
                      <Link
                        to="/my-account/info-account"
                        className="pl-1 flex items-center justify-between"
                      >
                        <IoIosArrowBack />
                        <span className="mr-1.5 font-Quicksand text-[16px] truncate">
                          {JSON.parse(userName)}
                        </span>
                      </Link>
                    </li>
                    <li className="flex justify-end w-32 py-1.5 items-center pr-2 bg-white  border-orange-500 my-1 transition-all duration-200 ease-in-out rounded-md shadow-orange-500 hover:drop-shadow-lg">
                      <Link to="/my-account/dashboard" className="pr-1">
                        پیشخوان
                      </Link>
                      <RxDashboard className=" text-green-500" size={20} />
                    </li>

                    <li className="flex justify-end w-32 py-1.5 items-center pr-2 bg-white border-orange-500 my-1 transition-all duration-200 ease-in-out rounded-md shadow-orange-500 hover:drop-shadow-lg">
                      <Link to="/my-account/info-account" className="pr-1">
                        اطلاعات کاربری
                      </Link>
                      <FaUserEdit className=" text-blue-200" size={20} />
                    </li>
                    <li className="flex justify-end w-32 py-1.5 items-center pr-2 bg-white border-orange-500 my-1 transition-all duration-200 ease-in-out rounded-md shadow-orange-500 hover:drop-shadow-lg">
                      <Link to="/my-account/myOrders" className="pr-1">
                        سفارش ها
                      </Link>
                      <RiShoppingBasket2Line
                        className="text-yellow"
                        size={20}
                      />
                    </li>
                    <li className="flex justify-end w-32 py-1.5 items-center pr-2 bg-white border-orange-500 my-1 transition-all duration-200 ease-in-out rounded-md shadow-orange-500 hover:drop-shadow-lg">
                      <Link to="/my-account/AddtoFavorite" className="pr-1">
                        علاقه مندی ها
                      </Link>
                      <MdOutlineFavoriteBorder className="text-red" size={20} />
                    </li>
                    <li className="flex justify-end w-32 py-1.5 items-center pr-2 bg-white border-orange-500 my-1 transition-all duration-200 ease-in-out rounded-md shadow-orange-500 hover:drop-shadow-lg">
                      <button onClick={logOut} className="pr-1">
                        خروج
                      </button>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>

          <div className="lg:flex md:text-[14px] justify-between box-border hidden">
            <ul className="flex justify-center">
              <li className="mr-4">
                <Link to="/AboutUs">درباره ما</Link>
              </li>
              <li className="mx-4">
                <Link to="/contact-us">تماس با ما</Link>
              </li>
              {navbarItems ? (
                navbarItems.map((items) => (
                  <li className="mx-4" key={items.id}>
                    <Link to={`/product/${items.slug}`} className="">
                      {items.title}
                    </Link>
                  </li>
                ))
              ) : (
                <ImSpinner6 size={30} className="animate-spin mx-auto" />
              )}
            </ul>
          </div>
          <div className="text-orange-500 hidden lg:flex">
            <img src={logoo} className="w-[60px] h-[60px]" />
          </div>
        </div>
      </div>

      {/* navar in mobile */}
      {nav ? (
        <div
          className="bg-black/80 w-full h-screen fixed top-0 left-0 z-30 lg:hidden xl:hidden flex"
          onClick={() => {
            setNav(!nav);
          }}
        ></div>
      ) : (
        ""
      )}
      <div className="lg:hidden xl:hidden fixed z-20 w-full flex justify-between  flex-row-reverse item-center shadow-xl bg-white mx-0.5 ">
        <div className="flex items-center mr-3">
          <HiMenu size={30} className="text-blue-200" onClick={handleNavbar} />
        </div>
        <div>
          <img src={logoo} className="w-[50px] h-[50px]" />
        </div>
        {localStorage.getItem("token") === null ? (
          <div className=" rounded-md flex items-center text-blue-200 ml-3">
            <Link to="/signUp">
              {" "}
              <FaUser size={20} className="" />
            </Link>
          </div>
        ) : (
          <div className=" rounded-md flex items-center text-blue-200 ml-3">
            <Link to="/my-account">
              {" "}
              <FaUser size={20} className="" />
            </Link>
          </div>
        )}
      </div>

      <div className="lg:hidden xl:hidden flex">
        <div
          className={
            nav
              ? "fixed top-0 right-0 w-[250px] h-screen  bg-white text-black z-30"
              : "fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-10 duration-400"
          }
        >
          <div className="border-b-2 flex justify-center border-orange-500 mx-2">
            <img src={logoo} className="w-[70px] h-[70px]" />
          </div>
          <nav className="">
            <ul className="flex flex-col relative text-right top-2">
              {navbarItems ? (
                navbarItems.map((item) => (
                  <li
                    key={item.id}
                    className="my-2 flex items-center justify-end ease-in-out duration-200 delay-100 hover:shadow-lg py-1.5 mx-2 rounded-md px-1"
                  >
                    <Link to={`/product/${item.slug}`}>{item.title}</Link>
                  </li>
                ))
              ) : (
                <p>null</p>
              )}

              <li className="flex items-center justify-end my-2  ease-in-out duration-200 delay-100 hover:shadow-lg py-1.5 mx-2 rounded-md px-1">
                <Link to="/AboutUs">درباره ما</Link>
              </li>
              <li className="flex items-center justify-end  ease-in-out duration-200 delay-100 hover:shadow-lg my-2 py-1.5 mx-2 rounded-md px-1">
                <Link to="/contact-us">تماس با ما</Link>
              </li>
              <li className="flex items-center justify-end  ease-in-out duration-200 delay-100 hover:shadow-lg my-2 py-1.5 mx-2 rounded-md px-1">
                <Link to="/shopcart">سبد خرید</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
