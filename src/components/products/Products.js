import React, { useEffect, useContext, useState } from "react";
import Navbar from "../shared/Navbar";
import {
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import { HiPlus } from "react-icons/hi";
import { BsCartCheck } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { CartContext } from "../../context/CartContextProvider";
import StarRate from "../StarRate";
import { numberWithComma, IsInCartProduct } from "../../helper/function";
import {ImSpinner6} from "react-icons/im"
const Products = () => {
  const { state, dispatch } = useContext(CartContext);
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filterBrand, setFilterBrand] = useState([]);
  const [modelFilter, setModelFilter] = useState(undefined);
  const [brandFilter, setBrandFilter] = useState(undefined);

  console.log(filter);
  console.log(filterBrand);
  const deletedFilterHandler = () => {
    return setModelFilter(undefined), setBrandFilter(undefined);
  };
  console.log(modelFilter);
  console.log(brandFilter);
  //console.log([...searchParams]);
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await axios.get(
        `https://mahantasvir.ir/product/${slug}`,
        {
          params: {
            model: modelFilter,
            brand: brandFilter,
          },
        }
      );
      // console.log(data);
      setProducts(data[0]);
      setFilter(data[1]);
      setFilterBrand(data[2]);
    };
    getCategory();
  }, [modelFilter, brandFilter, slug]);

  const onModelFilterChange = (e) => {
    console.log(e.target.value);
    setModelFilter(e.target.value);
  };
  const onBrandFilterChange = (e) => {
    console.log(e.target.value);

    setBrandFilter(e.target.value);
  };
  const isPhone = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div className="lg:flex-row flex-col-reverse mx-3 mt-10 flex">
        <div className="lg:flex-row xl:flex-row flex justify-center items-start my-9 xl:mx-4">
          <div className=" w-full grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-2 mobilem:gap-3 md:grid-cols-3 overflow-hidden">
            {products ? (
              products.map((item) => (
                <div
                  key={item.id}
                  className="border-silver border duration-500 delay-75 transition rounded-md hover:scale-95 h-[230px] md:h-[330px] lg:h-[365px] "
                >
                  <img
                    src={item.files}
                    alt="cctv camera"
                    className="lg:w-[200px] lg:h-[190px] md:w-[180px] md:h-[180px] w-[100px] h-[100px] mx-auto my-3"
                  />
                  <p className="truncate text-sm mobile:text-[12px] mx-3 font-sans  my-2 md:mb-4 lg:mb-4">
                    Analog CCTV Camera HD 1080P 4-in-1
                  </p>
                  <div className="flex-col justify-between items-center mx-3 my-2 md:my-1 lg:my-2">
                    <p className="text-md font-bold text-black lg:mb-2 mobile:text-[14px]  ">
                      {numberWithComma(item.price)}
                      <span className="text-sm  text-orange-600">تومان</span>
                    </p>
                    {isPhone && isTablet ? "" : <StarRate />}
                  </div>
                  <div className="flex justify-between items-center mx-3 mt-3">
                    <Link
                      to={`/product/single/${item.id}`}
                      className="text-blue-200 text-md"
                    >
                      جزییات
                    </Link>
                    {IsInCartProduct(state, item.id) ? (
                      <button
                        className="text-white justify-center flex items-center transition-all duration-200 delay-150 ease-in-out rounded-md bg-orange-500 w-7 h-7 xl:h-8 xl:w-12 lg:h-8 lg:w-12"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE-ITEM-PRODUCT",
                            payload: item,
                          })
                        }
                      >
                        <BsCartCheck size={22} className="" />
                      </button>
                    ) : (
                      <>
                        <button
                          className="text-white bg-blue-200 transition-all duration-200 delay-150 ease-in-out  px-2.5 rounded-md py-1 align-middle hidden lg:flex xl:flex"
                          onClick={() =>
                            dispatch({
                              type: "ADD_ITEMS-PRODUCT",
                              payload: item,
                            })
                          }
                        >
                          {" "}
                          افزودن به سبد
                        </button>

                        <button
                          className="text-white bg-blue-200 items-center transition-all duration-200 delay-150 ease-in-out w-7 h-7 justify-center rounded-md py-1 align-middle flex lg:hidden xl:hidden"
                          onClick={() =>
                            dispatch({
                              type: "ADD_ITEMS-PRODUCT",
                              payload: item,
                            })
                          }
                        >
                          {" "}
                          <HiPlus className="" size={20} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <ImSpinner6 size={30} className="animate-spin mx-auto" />
              )}
          </div>
          {/* filter product */}
        </div>
        <div className="lg:w-[20%] mt-10 lg:mx-4">
          <h1 className="py-2 border-2 border-blue-100 text-center rounded-md ">
            فیلتر محصولات
          </h1>
          <div className=" bg-blue-20 my-3 flex  rounded-md justify-between items-center">
            <select
              className=" outline-none bg-blue-20 flex flex-col items-center ml-2"
              onChange={onModelFilterChange}
            >
              {filter.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <p className="text-center px-1.5 py-1">برند سازنده</p>
          </div>

          <div className=" bg-blue-20 my-3 flex rounded-md justify-between items-center">
            <select
              onChange={onBrandFilterChange}
              className=" outline-none bg-blue-20 flex flex-col items-center ml-2"
            >
              {filterBrand.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <p className="text-center px-1.5 py-1">مدل</p>
          </div>
          <button
            className="bg-orange-500 text-white rounded-md py-1 w-full"
            onClick={deletedFilterHandler}
          >
            حذف فیلتر
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
