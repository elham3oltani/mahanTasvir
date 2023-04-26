import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../App.css";
import { Pagination, A11y, Navigation } from "swiper";
import { ProductsContext } from "../../context/ProductContextProvider";
const Brands = () => {
  const brands = useContext(ProductsContext);
  const brand = brands[0];
  return (
    <>
      <div className="text-center bg-orange-500">
        <h1 className="font-bold text-[22px] text-white py-1">
          برند محصولات ما
        </h1>
      </div>
      <div className="my-10 mx-4 mobilem:mx-8 mobilel:mx-2 md:mx-4">
        <Swiper
          modules={[Pagination, A11y, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 3,
            },

            375: {
              slidesPerView: 1,
              spaceBetween: 3,
            },

            425: {
              slidesPerView: 2,
              spaceBetween: 1,
            },
            768: {
              spaceBetween: 3,
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
          spaceBetween={30}
          slidesPerView={4}
          className=" flex justify-center items-center mx-10"
        >
          <div className="mx-auto w-auto">
            {brand?.map((item) => (
              <SwiperSlide key={item.id} className="my-4 mx-auto">
                <img
                  src={item.files}
                  alt="dlink"
                  className="w-[150] h-[120px] mx-auto object-fill"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Brands;
