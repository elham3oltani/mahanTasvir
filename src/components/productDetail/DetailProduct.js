import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-carousel-minimal";
import { Link, useLocation, useParams } from "react-router-dom";
import Introduction from "./Introduction";
import notImage from "../../images/notimage.png";
import ProductSpec from "./ProductSpec";
import { MdEventAvailable, MdPriceCheck } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import Navbar from "../shared/Navbar";
import { numberWithComma, IsInCartProductDet } from "../../helper/function";
import { ImSpinner6 } from "react-icons/im";
import { CartContext } from "../../context/CartContextProvider";
import StarRate from "../StarRate";
const DetailProduct = () => {
  const { state, dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [productDet, setProductDet] = useState([]);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await axios.get(
        `https://backend.mahantasvir.ir/single/${id}`
      );
      setProductDet(data[0]);
    };
    getCategory();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const dotsStyle = {
    marginBottom: "5rem",
  };
  const [value] = productDet?.map((item) => {
    return item.product_attribute || [];
  });
  const [img] = productDet?.map((item) => {
    return item?.product_image || [];
  });
  let data = img?.map((image) => {
    const getFiles = { image: image?.files };
    return getFiles || {};
  });

  return (
    <>
      <Navbar />
      {productDet ? (
        productDet.map((item) => (
          <div
            key={item.id}
            className="flex w-full lg:flex-row-reverse xl:flex-row-reverse flex-col mt-20
           md:my-6 lg:my-6 items-center px-4 box-border relative"
          >
            <h1 className="text-orange-500">{item?.product_image.files}</h1>

            <div className="w-full md:w-[300px] mobilel:w-[350px]  2xl:w-[400px] xl:w-[400px] lg:w-[400px] h-auto p-4 py-2 mt-4">
              {data.length > 0 ? (
                <Carousel
                  className="mx-auto max-w-[550px] max-h-[400px]"
                  data={data}
                  time={false}
                  width="500px"
                  height="300px"
                  radius="5px"
                  slideNumber={false}
                  automatic={false}
                  dots={true}
                  dotsStyle={dotsStyle}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={isTablet ? true : false}
                  thumbnailWidth="80px"
                  showNavBtn={false}
                />
              ) : (
                <div>
                  <img
                    className="w-full max-h-[400px] h-[300px]"
                    src={notImage}
                  />
                </div>
              )}
            </div>
            <div
              name="detailProduct"
              className="lg:w-1/3 w-full md:w-full px-4 mx-8 mb-6 box-border"
            >
              <div className="mt-4">
                <p className="font-bold text-blue-full font-Quicksand text-right ">
                  {item.name}
                </p>
              </div>
              <div className="my-2 text-right">
                <span className="text-silver text-[16px]">
                  {item.product_attribute[0]?.attribute}
                </span>
                <span className="font-bold block px-1 text-blue-300 bg-blue text-[20px]">
                  {item.product_attribute[0]?.value}
                </span>
              </div>

              <div className="my-2 align-middle text-right">
                <span className="text-silver text-[16px]">
                  {item.product_attribute[1]?.attribute}
                </span>
                <span className="font-bold block px-1 text-blue-300 bg-blue text-[18px]">
                  {item.product_attribute[1]?.value}
                </span>
              </div>

              <div className="my-2 text-right">
                <span className="text-silver text-[16px]">
                  {item.product_attribute[2]?.attribute}
                </span>
                <span className="font-bold flex px-1 flex-row-reverse text-blue-300 bg-blue text-[18px]">
                  {item.product_attribute[2]?.value}
                </span>
              </div>
              <div className="text-right">
                <p className="text-silver text-[16px]">
                  {item.product_attribute[3]?.attribute}
                </p>
                <p className="font-bold block px-1 text-blue-300 bg-blue text-[18px]">
                  {item.product_attribute[3]?.value}
                </p>
              </div>
              <div className="text-right flex items-center justify-between flex-row-reverse my-4">
                <StarRate />
                <button className="text-white bg-green-500 px-2 py-2 rounded-md">
                  خرید هم اکنون
                </button>
              </div>
            </div>

            <div className="lg:w-1/4 w-full flex flex-col items-end justify-end mx-4 px-4 mb-8 rounded-md border-orange-500 border">
              <div className="flex border-b w-full flex-row-reverse justify-between items-center">
                <p className="py-1.5">اطلاعات محصول</p>
              </div>

              <div className="flex my-2 items-center">
                {item.numbers ? (
                  <span>{item.numbers}</span>
                ) : (
                  <span>ناموجود</span>
                )}

                <p className="mx-1">موجود در انبار</p>

                <MdEventAvailable size={25} className="text-green-500" />
              </div>

              <div className="flex my-2 items-center">
                <p className="mx-1">گارانتی ۲ ساله</p>
                <AiOutlineFileProtect size={25} className="text-blue-500" />
              </div>

              <div className="flex my-2 items-center">
                <p className="mx-1">ارسال از یک روز کاری دیگر</p>
                <FaShippingFast size={25} className="text-blue-500" />
              </div>
              <div className="flex my-2 items-center">
                <p className="mx-1 flex items-center font-bold text-lg text-orange-500 justify-center">
                  <span className="mx-1 text-black">تومان</span>
                  {numberWithComma(item.price)}
                </p>
                <MdPriceCheck size={25} className="text-blue-500" />
              </div>
              <div className="flex w-full">
                {IsInCartProductDet(state, item.id) ? (
                  <button
                    onClick={() =>
                      dispatch({
                        type: "REMOVE-ITEM-PRODUCT_DET",
                        payload: item,
                      })
                    }
                    className="bg-green-500 w-full py-2 px-2 mx-2 my-2 rounded-lg text-white"
                  >
                    به سبد خرید اضافه شد
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD_ITEMSPRODUCT_DET", payload: item })
                    }
                    className="bg-orange-500 w-full py-2 px-2 mx-2 my-2 rounded-lg text-white"
                  >
                    اضافه به سبد خرید
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <ImSpinner6 size={30} className="animate-spin mx-auto" />
      )}
      <nav className="flex lg:justify-evenly justify-around py-1.5  text-lg bg-blue-50 text-white flex-row-reverse ">
        <Link to="/" index className="">
          معرفی
        </Link>
        <Link to="" className="cursor-pointer">
          مشخصات
        </Link>
      </nav>
      <div className="lg:w-5/6 w-full mx-auto">
        <Introduction des={productDet} className="ext-justify" />
        <ProductSpec value={value} />
      </div>
    </>
  );
};

export default DetailProduct;
