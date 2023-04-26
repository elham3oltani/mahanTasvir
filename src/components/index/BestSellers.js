import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContextProvider.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartContext } from "../../context/CartContextProvider.js";
import { Navigation, A11y } from "swiper";
import 'swiper/css/navigation';
import { useMediaQuery } from "react-responsive";
import {
  quantityCountBrand,
  IsInCartBrand,
  numberWithComma,
} from "../../helper/function";
import { ImSpinner6 } from "react-icons/im";
import { HiPlus, HiMinus } from "react-icons/hi";
import StarRate from "../StarRate";
import { Link } from "react-router-dom";
import { TbShoppingCartPlus, TbTrashX } from "react-icons/tb";
const BestSellers = () => {
  const { state, dispatch } = useContext(CartContext);
  const products = useContext(ProductsContext);
  const productNew = products["proposal"];
  const istablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <>
      <div className="mt-8 flex flex-col justify-center items-center">
        <h1 className="text-[25px] font-bold border-b mx-4 border-orange-500 text-blue-500 mr-1">
          محصولات برتر
        </h1>
      </div>
      <div className="my-10 mx-4 relative">
        <Swiper
          modules={[A11y, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },

            375: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            425: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              spaceBetween: 7,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 4,
            },
            1280: {
              spaceBetween: 15,
              slidesPerView: 5,
            },
          }}
          scrollbar={{ draggable: true }}
          navigation={true}
          zoom={true}
          spaceBetween={30}
          slidesPerView={4}
        >
          {productNew ? (
            productNew.map((product) => (
              <SwiperSlide
                key={product.id}
                className="max-h-[360px] border-silver bg-white relative border h-[360px] rounded-lg hover:shadow-2xl py-4 "
              >
                <div className="flex flex-col lg:py-3  ">
                  <img
                    src={product.files}
                    alt="cctv camera"
                    className="w-[180px] h-[160px] mx-auto my-3"
                  />

                  <p className="truncate mx-3 text-sm my-3 font-Kanit">
                    {product.name}
                  </p>
                  <div className="flex-col flex lg:flex-row justify-between lg:items-center mx-3 my-1">
                    <p className="text-md font-bold text-blue-200">
                      {numberWithComma(product.price)}

                      <span className="text-sm text-orange-700">تومان</span>
                    </p>
                    <div className="lg:flex my-1">
                      <StarRate />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mx-3 mb-4 lg:mt-2">
                    <div>
                      <Link
                        to={`product/single/${product.id}`}
                        className="text-blue-200 text-lg"
                      >
                        جزییات
                      </Link>
                    </div>
                    <div className="flex items-center justify-center text-white">
                      {quantityCountBrand(state, product.id) === 1 && (
                        <button
                          className="p-1 mx-1 rounded-full flex items-end justify-centerl bg-orange-500 h-7 w-7"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE-ITEM-FROM-BRAND",
                              payload: product,
                            })
                          }
                        >
                          <TbTrashX size={21} className="" />
                        </button>
                      )}
                      {quantityCountBrand(state, product.id) > 1 && (
                        <button
                          className=" mx-1 p-1 bg-orange-500 h-7 w-7 flex items-end justify-center rounded-full text-2xl"
                          onClick={() =>
                            dispatch({
                              type: "DECRESS-BRAND",
                              payload: product,
                            })
                          }
                        >
                          <HiMinus size={17} />
                        </button>
                      )}

                      {quantityCountBrand(state, product.id) > 0 && (
                        <span className="text-black">
                          {quantityCountBrand(state, product.id)}
                        </span>
                      )}

                      {IsInCartBrand(state, product.id) ? (
                        <button
                          className=" p-1 mx-1 rounded-full flex items-end justify-center bg-orange-500 h-7 w-7"
                          onClick={() =>
                            dispatch({
                              type: "INCRESS-BRAND",
                              payload: product,
                            })
                          }
                        >
                          <HiPlus size={17} />
                        </button>
                      ) : (
                        <button
                          className=" bg-blue-200 text-white  px-2.5 rounded-md py-1 align-middle"
                          onClick={() =>
                            dispatch({
                              type: "ADD_ITEMS_BRAND",
                              payload: product,
                            })
                          }
                        >
                          {" "}
                          <TbShoppingCartPlus size={25} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <ImSpinner6 size={30} className="animate-spin mx-auto" />
          )}
        </Swiper>
      </div>
    </>
  );
};
export default BestSellers;
