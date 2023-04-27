import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider.js";
const Category = () => {
  const products = useContext(ProductsContext);
  const items = products[2];
  return (
    <>
      <div className="bg-orange-500 text-center box-border ">
        <h1 className="lg:py-4 py-1.5 text-white text-[22px] mobile:text-[18px] font-bold">
          محصولات ماهان تصویر
        </h1>
      </div>
      <div className="lg:flex md:flex xl:flex items-center justify-evenly text-center w-full grid mobilel:grid-cols-3 grid-cols-2 mt-6">
        {items?.map((navItems) => (
          <Link
            key={navItems.id}
            to={`/product/${navItems.slug}`}
            className="cursor-pointer flex flex-col items-center my-3"
          >
            <img src={navItems.files} alt={navItems.title} className="w-[70px] h-[65px]" />
            <span className="text-sm  text-blue-300 my-2 py-0.5 px-2 rounded-sm">
              {navItems.title}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
