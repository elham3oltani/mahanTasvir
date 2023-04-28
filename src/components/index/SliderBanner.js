import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductsContext } from "../../context/ProductContextProvider.js";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const SliderBanner = () => {
  const products = useContext(ProductsContext);
  const banners = products[1];
  return (
    <>
      <Carousel
        autoPlay={true}
        customTransition="all .3"
        transitionDuration={2000}
        autoPlaySpeed={4000}
        responsive={responsive}
        removeArrowOnDeviceType={["mobile", "tablet"]}
        className="w-full md:h-[400px] xl:h-[600px] 2xl:h-[600px] lg:h-[600px] object-cover h-[270px]"
        arrows={true}
      >
        {banners
          ? banners.map((banner) => (
              <div className="w-full" key={banner.id}>
                <img
                  key={banners.id}
                  alt={banner.name}
                  src={banner.files}
                  className="w-full md:h-[600px] 2xl:h-[600px] xl:h-[600px] lg:h-[600px] h-[270px] object-fill"
                />
              </div>
            ))
          : []}
      </Carousel>
    </>
  );
};

export default SliderBanner;
