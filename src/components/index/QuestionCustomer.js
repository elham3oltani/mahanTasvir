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
      <div className="my-8 mx-4 text-[14px] font-bold mobilem:mx-6 mobilel:mx-2 md:mx-4">
        <Swiper
          modules={[Pagination, A11y, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },

            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            425: {
              slidesPerView: 2,
              spaceBetween: 10,
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
          <SwiperSlide className="border-black border w-max-[275px] h-max-[280px] rounded-lg hover:shadow-2xl mb-8">
            <div className="duration-150 delay-150 ">
              <img
                src="https://dkstatics-public.digikala.com/digikala-products/d695b6c2061567dcf4fb655db3886b8a972b81f2_1637741715.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                alt="pakage dozgir"
                className="w-full h-[280px] mx-auto rounded-md bg-black transition duration-150 delay-150 hover:opacity-50 "
              />
              <p className="font-Quicksand mx-3 my-3 text-center">
                اقتصادی ترین پکیج دزدگیر
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" border-black border w-max-[275px] rounded-lg hover:shadow-2xl mb-8">
            <div className="duration-150 delay-150 ">
              <img
                src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/04/Security_Camera_Installation_Cost_77104021.jpg"
                alt="cctv camera"
                className="w-full h-[280px] mx-auto rounded-md bg-black transition duration-150 delay-150 hover:opacity-50 "
              />
              <p className="font-Quicksand mx-3 my-3 text-center">
                دوربین مناسب برای باغ
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" border-silver border w-max-[275px] rounded-lg hover:shadow-2xl mb-8">
            <div className="duration-150 delay-150 transition">
              <img
                src="https://www.totikala.ir/photo/Store-anti-theft-gate-tags.jpg"
                alt="cctv camera"
                className="w-full h-[280px] mx-auto rounded-md transition duration-150 delay-150 hover:opacity-50"
              />
              <p className="font-Quicksand mx-3 my-3 text-center truncate">
                برای فروشگاهم از کدام تگ ها استفاده کنم
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" border-silver border w-max-[275px] rounded-lg hover:shadow-2xl mb-8">
            <div className="duration-150 delay-150 transition">
              <img
                src="https://doorbinmarket.com/wp-content/uploads/2022/11/0000890_810.jpeg"
                alt="cctv camera"
                className="w-full h-[280px] mx-auto rounded-md transition duration-150 delay-150 hover:opacity-50"
              />
              <p className="font-Quicksand mx-3 my-3 text-center">
                دوربین مناسب برای فروشگاه
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" border-silver border w-max-[275px] rounded-lg hover:shadow-2xl mb-8">
            <div className="duration-150 delay-150 transition">
              <img
                src="https://mobtakeransanat.com/wp-content/uploads/2019/10/%D8%B3%D9%88%D9%BE%D8%B1-%DA%AF%DB%8C%D8%AA-%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87%DB%8C-%D8%A7%DB%8C%D9%85%D9%86-%D9%85%D9%88%D8%AC-%D9%85%D8%B4%DA%A9%DB%8C.jpg"
                alt="cctv camera"
                className="w-full h-[280px] mx-auto rounded-md transition duration-150 delay-150 hover:opacity-50"
              />
              <p className="font-Quicksand mx-3 my-3 text-center">
                گیت مناسب برای فروشگاهم
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" border-silver border w-max-[275px] rounded-lg hover:shadow-2xl mb-8">
            <div className="duration-150 delay-150 transition">
              <img
                src="https://www.usnews.com/object/image/00000178-69d4-d5d0-adfc-fbfea21b0000/210325-securitycameras-mainimage2-stock.jpg?update-time=1616683297657&size=responsiveFlow640"
                alt="cctv camera"
                className="w-full h-[280px] mx-auto rounded-md transition duration-150 delay-150 hover:opacity-50"
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
