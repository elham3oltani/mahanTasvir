import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRate from "../StarRate";
import {
  IsInCartAccesso,
  quantityCountAccesso,
  numberWithComma,
} from "../../helper/function";
import "swiper/css/navigation";
import { CartContext } from "../../context/CartContextProvider.js";
import { ProductsContext } from "../../context/ProductContextProvider.js";
import { ImSpinner6 } from "react-icons/im";
import { HiPlus, HiMinus } from "react-icons/hi";
import "swiper/css";
import "../../App.css";
import { TbShoppingCartPlus, TbTrashX } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { A11y, Navigation } from "swiper";
import { Link } from "react-router-dom";
const ProductAccessories = () => {
  const { state, dispatch } = useContext(CartContext);
  const products = useContext(ProductsContext);
  const accessories = products["janebi"];
  const isPhone = useMediaQuery({
    query: "(min-width: 425px)",
  });
  return (
    <>
      <div className="mt-8 flex flex-col justify-center items-center">
        <h1 className="text-[25px] font-bold border-b border-orange-500 mx-4 text-blue-500 mr-1">
          لوازم جانبی
        </h1>
      </div>

      <div className="my-10 mx-4 relative">
        <Swiper
          modules={[A11y, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 3,
            },

            375: {
              slidesPerView: 2,
              spaceBetween: 3,
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
              slidesPerView: 4,
            },
            1440: {
              spaceBetween: 15,
              slidesPerView: 5,
            },
          }}
          navigation={isPhone ? false : true}
          scrollbar={{ draggable: true }}
          spaceBetween={30}
          slidesPerView={5}
        >
          {accessories ? (
            accessories.map((product) => (
              <SwiperSlide
                key={product.id}
                pro="true"
                className="border-silver bg-white relative border rounded-lg hover:shadow-2xl "
              >
                <div className="flex flex-col lg:py-3">
                  <img
                    src={product.files}
                    alt={product.name}
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
                  <div className="lg:flex flex justify-between items-center mx-3 mb-4 lg:mt-2">
                    <div>
                      <Link
                        to={`product/single/${product.id}`}
                        state={product}
                        className="text-blue-200 text-lg"
                      >
                        جزییات
                      </Link>
                    </div>

                    <div className="flex items-center justify-center">
                      {quantityCountAccesso(state, product.id) === 1 && (
                        <button
                          className="text-white h-7 w-7 p-1 mx-1 items-center flex justify-center rounded-full bg-orange-500"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE-ITEM-ACCEESO",
                              payload: product,
                            })
                          }
                        >
                          <TbTrashX size={23} />
                        </button>
                      )}
                      {quantityCountAccesso(state, product.id) > 1 && (
                        <button
                          className="text-white p-1 mx-1 justify-center rounded-full bg-orange-500 h-7 w-7 flex items-center text-lg"
                          onClick={() =>
                            dispatch({
                              type: "DECRESS-ACCESSO",
                              payload: product,
                            })
                          }
                        >
                          <HiMinus size={17} />
                        </button>
                      )}
                      {quantityCountAccesso(state, product.id) > 0 && (
                        <span>{quantityCountAccesso(state, product.id)}</span>
                      )}

                      {IsInCartAccesso(state, product.id) ? (
                        <button
                          className="text-white p-1 mx-1 flex items-center justify-center rounded-full bg-orange-500 h-7 w-7"
                          onClick={() =>
                            dispatch({
                              type: "INCRESS-ACCESSO",
                              payload: product,
                            })
                          }
                        >
                          <HiPlus size={17} />
                        </button>
                      ) : (
                        <button
                          className="text-white bg-blue-200  px-2.5 rounded-md py-1 align-middle"
                          onClick={() =>
                            dispatch({
                              type: "ADD_ITEMS-ACCESS0",
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
export default ProductAccessories;
