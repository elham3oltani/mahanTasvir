import React from "react";
import Navbar from "./shared/Navbar";
import SliderBanner from "./index/SliderBanner";
import Category from "./index/Category";
import BestSellers from "./index/BestSellers";
import SuggestedProducts from "./index/SuggestedProducts";
import ProductAccessories from "./index/ProductAccessories";
import Services from "./Services";
import QuestionCustomer from "./index/QuestionCustomer";
import Brands from "./index/Brands";
const Home = () => {
  return (
    <>
      <Navbar styleOnBanner={true} userActive={true} />
      <SliderBanner />
      <Category />
      <BestSellers />
      <SuggestedProducts />
      <ProductAccessories />
      <Services />
      <Brands />
      <QuestionCustomer />
    </>
  );
};

export default Home;
