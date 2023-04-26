import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { TbShoppingCartX, TbTrashX } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { numberWithComma } from "../../helper/function";
import { useLocation } from "react-router-dom";
const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div className="flex max-w-[1640px] w-full lg:w-2/3 xl:w-1/2 lg:px-0 px-2 border-inherit mx-auto md:w-3/4 items-center backdrop-blur-sm h-auto rounded-md my-12">
        <div className="mx-auto">
          <div className="flex justify-between w-full flex-col my-4 lg:flex-row items-center">
            {state.selectedItemsBeter.length &&
            state.selectedItemsSuggest &&
            state.selectedItemsAccesso >= 1 ? (
              <h1 className="lg:mx-2 my-1 xl:text-2xl md:text-3xl text-[20px] font-bold text-2xl">
                سبد خرید شما
              </h1>
            ) : (
              <h1 className="flex lg:mx-10 my-8 mx-4 justify-center font-bold lg:text-2xl text-md items-center">
                سبد خرید شما خالیست!
                <TbShoppingCartX size={38} />
              </h1>
            )}

            <div className="">
              {state.total === 0 ? (
                ""
              ) : (
                <p className="text-lg flex text-[16px] xl:text-lg justify-between items-center">
                  جمع خرید شما :
                  <span className="text-orange-500 p-2 font-bold font-sans text-xl">
                    {numberWithComma(state.total)}تومان
                  </span>
                </p>
              )}
            </div>
          </div>
          {state.selectedItemsSuggest.map((item) => (
            <div className="xl:flex-row my-4 flex flex-col w-full justify-between items-center border-b-2 border-gray-400 ">
              <div
                key={item.id}
                className="flex flex-col items-center justify-center mb-4"
              >
                <img
                  src={item.files}
                  alt={item.name}
                  className="object-cover sm:mx-auto rounded-full lg:w-[130px] lg:h-[130px] w-[180px] h-[180px] lg:ml-3 hover:scale-75 duration-300"
                />
              </div>
              <div className="flex justify-between flex-col text-center my-2 lg:text-left lg:flex-row items-center">
                <div className="w-[180px] mx-auto">
                  <p className="font-bold ml-3">{item.name}</p>
                  <p className="text-gray-500 ml-3">{item.category}</p>
                </div>

                <div className="rounded-full lg:w-[110px] w-[140px] justify-between flex my-4 items-center mx-auto lg:mx-5 px-3 border-2 border-black">
                  {item.quantity > 1 ? (
                    <button
                      className="px-1 m-1 font-bold text-lg"
                      onClick={() =>
                        dispatch({ type: "DECRESS-SUGGEST", payload: item })
                      }
                    >
                      -
                    </button>
                  ) : (
                    <button
                      className="m-1"
                      onClick={() =>
                        dispatch({ type: "REMOVE-ITEM-SUGGEST", payload: item })
                      }
                    >
                      <TbTrashX size={20} className="cursor-pointer" />
                    </button>
                  )}
                  <span className="m-1">{item.quantity}</span>

                  <button
                    className="px-1 m-1 text-lg font-bold"
                    onClick={() =>
                      dispatch({ type: "INCRESS-SUGGEST", payload: item })
                    }
                  >
                    +
                  </button>
                </div>

                <div className="lg:w-[100px] mx-5 text-right mb-3 lg:my-2">
                  <p className="font-bold text-center">
                    {numberWithComma(item.price)} $
                  </p>
                </div>
                <div className="w-[50px] mx-3 hidden lg:flex">
                  <button
                    className=""
                    onClick={() =>
                      dispatch({ type: "REMOVE-ITEM-SUGGEST", payload: item })
                    }
                  >
                    <CgClose size={25} className="cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {state.selectedItemsBeter.map((item) => (
            <div className="xl:flex-row my-4 flex flex-col w-full justify-between items-center border-b-2 border-gray-400 ">
              <div
                key={item.id}
                className="flex flex-col items-center justify-center mb-4"
              >
                <img
                  src={item.files}
                  alt={item.name}
                  className="object-cover sm:mx-auto rounded-full lg:w-[130px] lg:h-[130px] w-[180px] h-[180px] lg:ml-3 hover:scale-75 duration-300"
                />
              </div>
              <div className="flex justify-between flex-col text-center my-2 lg:text-left lg:flex-row items-center">
                <div className="w-[180px] mx-auto">
                  <p className="font-bold ml-3">{item.name}</p>
                  <p className="text-gray-500 ml-3">{item.category}</p>
                </div>

                <div className="rounded-full lg:w-[110px] w-[140px] justify-between flex my-4 items-center mx-auto lg:mx-5 px-3 border-2 border-black">
                  {item.quantity > 1 ? (
                    <button
                      className="px-1 m-1 font-bold text-lg"
                      onClick={() =>
                        dispatch({ type: "DECRESS-BRAND", payload: item })
                      }
                    >
                      -
                    </button>
                  ) : (
                    <button
                      className="m-1"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE-ITEM-FROM-BRAND",
                          payload: item,
                        })
                      }
                    >
                      <TbTrashX size={20} className="cursor-pointer" />
                    </button>
                  )}
                  <span className="m-1">{item.quantity}</span>

                  <button
                    className="px-1 m-1 text-lg font-bold"
                    onClick={() =>
                      dispatch({ type: "INCRESS-BRAND", payload: item })
                    }
                  >
                    +
                  </button>
                </div>

                <div className="lg:w-[100px] mx-5 text-right mb-3 lg:my-2">
                  <p className="font-bold text-center">
                    {numberWithComma(item.price)} $
                  </p>
                </div>
                <div className="w-[50px] mx-3 hidden lg:flex">
                  <button
                    className=""
                    onClick={() =>
                      dispatch({
                        type: "REMOVE-ITEM-FROM-BRAND",
                        payload: item,
                      })
                    }
                  >
                    <CgClose size={25} className="cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {state.selectedItemsAccesso.map((item) => (
            <div className="xl:flex-row my-4 flex flex-col w-full justify-between items-center border-b-2 border-gray-400 ">
              <div
                key={item.id}
                className="flex flex-col items-center justify-center mb-4"
              >
                <img
                  src={item.files}
                  alt={item.name}
                  className="object-cover sm:mx-auto rounded-full lg:w-[130px] lg:h-[130px] w-[180px] h-[180px] lg:ml-3 hover:scale-75 duration-300"
                />
              </div>
              <div className="flex justify-between flex-col text-center my-2 lg:text-left lg:flex-row items-center">
                <div className="w-[180px] mx-auto">
                  <p className="font-bold ml-3">{item.name}</p>
                  <p className="text-gray-500 ml-3">{item.category}</p>
                </div>

                <div className="rounded-full lg:w-[110px] w-[140px] justify-between flex my-4 items-center mx-auto lg:mx-5 px-3 border-2 border-black">
                  {item.quantity > 1 ? (
                    <button
                      className="px-1 m-1 font-bold text-lg"
                      onClick={() =>
                        dispatch({ type: "DECRESS-ACCESSO", payload: item })
                      }
                    >
                      -
                    </button>
                  ) : (
                    <button
                      className="m-1"
                      onClick={() =>
                        dispatch({ type: "REMOVE-ITEM-ACCEESO", payload: item })
                      }
                    >
                      <TbTrashX size={20} className="cursor-pointer" />
                    </button>
                  )}
                  <span className="m-1">{item.quantity}</span>

                  <button
                    className="px-1 m-1 text-lg font-bold"
                    onClick={() =>
                      dispatch({ type: "INCRESS-ACCESSO", payload: item })
                    }
                  >
                    +
                  </button>
                </div>

                <div className="lg:w-[100px] mx-5 text-right mb-3 lg:my-2">
                  <p className="font-bold text-center">
                    {numberWithComma(item.price)} $
                  </p>
                </div>
                <div className="w-[50px] mx-3 hidden lg:flex">
                  <button
                    className=""
                    onClick={() =>
                      dispatch({ type: "REMOVE-ITEM-ACCEESO", payload: item })
                    }
                  >
                    <CgClose size={25} className="cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {state.selectedItemsProduct.map((item) => (
            <div className="xl:flex-row my-4 flex flex-col w-full justify-between items-center border-b-2 border-gray-400 ">
              <div
                key={item.id}
                className="flex flex-col items-center justify-center mb-4"
              >
                <img
                  src={item.files}
                  alt={item.name}
                  className="object-cover sm:mx-auto rounded-full lg:w-[130px] lg:h-[130px] w-[180px] h-[180px] lg:ml-3 hover:scale-75 duration-300"
                />
              </div>
              <div className="flex justify-between flex-col text-center my-2 lg:text-left lg:flex-row items-center">
                <div className="w-[180px] mx-auto">
                  <p className="font-bold ml-3">{item.name}</p>
                  <p className="text-gray-500 ml-3">{item.category}</p>
                </div>

                <div className="rounded-full lg:w-[110px] w-[140px] justify-between flex my-4 items-center mx-auto lg:mx-5 px-3 border-2 border-black">
                  {item.quantity > 1 ? (
                    <button
                      className="px-1 m-1 font-bold text-lg"
                      onClick={() =>
                        dispatch({ type: "DECRESS-BRAND", payload: item })
                      }
                    >
                      -
                    </button>
                  ) : (
                    <button
                      className="m-1"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE-ITEM-FROM-BRAND",
                          payload: item,
                        })
                      }
                    >
                      <TbTrashX size={20} className="cursor-pointer" />
                    </button>
                  )}
                  <span className="m-1">{item.quantity}</span>

                  <button
                    className="px-1 m-1 text-lg font-bold"
                    onClick={() =>
                      dispatch({ type: "INCRESS-BRAND", payload: item })
                    }
                  >
                    +
                  </button>
                </div>

                <div className="lg:w-[100px] mx-5 text-right mb-3 lg:my-2">
                  <p className="font-bold text-center">
                    {numberWithComma(item.price)} $
                  </p>
                </div>
                <div className="w-[50px] mx-3 hidden lg:flex">
                  <button
                    className=""
                    onClick={() =>
                      dispatch({
                        type: "REMOVE-ITEM-FROM-BRAND",
                        payload: item,
                      })
                    }
                  >
                    <CgClose size={25} className="cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="">
            {state.itemsCounter > 0 && (
              <div className="flex lg:flex-row flex-col justify-between items-center">
                <div className="lg:ml-4 mb-2 flex flex-col items-center ">
                  <button
                    onClick={() => dispatch({ type: "CLEAR" })}
                    className="my-3 font-bold bg-sky-700 py-2.5 rounded-full w-[300px] lg:w-[100px] text-white"
                  >
                    پاک کردن
                  </button>
                  <Link
                    to="/"
                    className="text-orange-500 lg:mb-8 mt-0.5 hidden lg:flex mr-5"
                  >
                    <TiArrowLeftThick size={25} className="text-black" />
                    بازگشت به صفحه اصلی
                  </Link>
                </div>

                <div className="lg:mr-4 lg:mb-2 flex flex-col items-center">
                  <button
                    onClick={() => dispatch({ type: "CHECKOUT" })}
                    className="bg-green-700 text-white xl:w-[100px] w-[300px] py-2.5 my-3 rounded-full"
                  >
                    پرداخت
                  </button>
                  <p className="font-bold mb-8 mt-0.5 hidden lg:flex">
                    <span className="font-bold">تعداد محصولات :</span>
                    <span className="text-orange-500 font-bold ml-1">
                      {state.itemsCounter}
                    </span>
                  </p>
                </div>
              </div>
            )}

            {state.checkOut && (
              <div className="mx-10 mb-8">
                <h3 className="font-bold text-green-600">
                  پر با موفقیت انجام شد
                </h3>
                <Link to="/" className="flex text-orange-600">
                  خرید بیشتر
                </Link>
              </div>
            )}

            {!state.checkOut && state.itemsCounter === 0 && (
              <div className="mx-10 mb-8">
                <Link to="/" className="flex text-orange-600">
                  <TiArrowLeftThick size={25} className="text-black" />
                  بازگشت به صفحه خرید
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
