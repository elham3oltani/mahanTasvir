import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/zoom";
import "swiper/css";
import "../../App.css";
import "swiper/css/navigation";
import { Pagination, A11y, Navigation } from "swiper";
import "swiper/css";

const QuestionCustomer = () => {
  return (
    <>
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="text-[25px] font-bold border-b border-orange-500 text-blue-500 mr-1">
          سوالات متداول مشتریان
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
              spaceBetween: 7,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
            1280: {
              spaceBetween: 15,
              slidesPerView: 3,
            },
          }}
          navigation={true}
          scrollbar={{ draggable: true }}
          zoom={true}
          spaceBetween={30}
          slidesPerView={4}
        >
          <SwiperSlide className=" border-black border w-max-[275px] rounded-lg hover:shadow-2xl mb-8">
            <div className="duration-150 delay-150 ">
              <img
                src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/04/Security_Camera_Installation_Cost_77104021.jpg"
                alt="cctv camera"
                className="w-full h-full mx-auto rounded-md bg-black transition duration-150 delay-150 hover:opacity-50 "
              />
              <p className="font-Quicksand mx-3 my-3 text-center">
                دوربین مناسب برای باغ
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" border-silver border w-max-[275px] rounded-lg hover:shadow-2xl mb-8">
            <div className="duration-150 delay-150 transition">
              <img
                src="https://i.pinimg.com/474x/d8/c4/ea/d8c4eaee494087aa19e6634d99c30e93.jpg"
                alt="cctv camera"
                className="w-full h-full mx-auto rounded-md transition duration-150 delay-150 hover:opacity-50"
              />
              <p className="font-Quicksand mx-3 my-3 text-center">
                دوربین مناسب برای کارخونه
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" border-silver border w-max-[275px] rounded-lg hover:shadow-2xl mb-8">
            <div className="duration-150 delay-150 transition">
              <img
                src="https://www.usnews.com/object/image/00000178-69d4-d5d0-adfc-fbfea21b0000/210325-securitycameras-mainimage2-stock.jpg?update-time=1616683297657&size=responsiveFlow640"
                alt="cctv camera"
                className="w-full h-full mx-auto rounded-md transition duration-150 delay-150 hover:opacity-50"
              />
              <p className="font-Quicksand mx-3 my-3 text-center">
                دوربین مناسب برای خونه
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default QuestionCustomer;
