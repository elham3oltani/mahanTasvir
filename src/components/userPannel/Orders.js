import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
const Orders = () => {
  return (
    <div className="border border-gray my-4 lg:my-0 mx-4 rounded-md">
      <div className="flex py-3 justify-between flex-row-reverse px-2">
        <div className="flex justify-center items-center text-sm">
          <p className="text-right text-[17px]"> هیچ سفارشی ثبت نشده است</p>
          <IoIosCloseCircle size={20} className="text-red ml-0.5" />
        </div>
        <div>
          <Link to="/" className="text-blue-300">
            مرور محصولات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;
