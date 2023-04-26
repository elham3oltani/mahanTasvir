import React from "react";

const ProductSpec = ({ value }) => {
  return (
    <div
      name="specProduct"
      className="w-full my-4 flex flex-col justify-end items-end"
    >
      <div className="lg:w-1/2 w-full flex flex-col px-2 text-sm my-6">
        {value?.map((i) => (
          <div
            key={i.id}
            className="flex lg:text-lg text-smg mb-3 flex-row-reverse justify-center text-center items-center"
          >
            <p className="lg:w-52 w-36 bg-yellow-50 bg-orange-10 ml-1">
              {i.attribute}
            </p>
            <span className="font-bold w-96 bg-node">{i.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpec;
