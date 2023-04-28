import React from "react";
import myOrders from "../../images/myOrders.png";
import completedOrders from "../../images/completedOrders.png";
import returnOrder from "../../images/returnOrder.png";
const Dashboard = () => {
  return (
    <div className="flex-col justify-center border border-gray rounded-lg mx-4 my-4 lg:my-0">
      <h3 className="my-6 mx-4 text-right">سفارش های من</h3>
      <div className="flex items-center justify-between flex-row-reverse my-4">
        <div className="flex lg:flex-row-reverse flex-col  justify-center items-center w-64 mx-4">
          <img
            src={myOrders}
            className="g:w-[64px] lg:h-[64px] w-[56px] h-[56px]"
            alt="myorders"
          />
          <p className="absolute mr-8 mb-10 text-white bg-silver w-5 h-5 text-center rounded-full lg:hidden">
            0
          </p>
          <div className="">
            <p className="px-2 py-2 hidden lg:flex">سفارش ها 0</p>

            <p className="font-sm text-gray text-right px-2">جاری</p>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row-reverse w-64 items-center">
          <img
            alt="completedOrders"
            src={completedOrders}
            className="lg:w-[64px] lg:h-[64px] w-[56px] h-[56px]"
          />
          <p className="absolute mr-10 mb-12 text-white bg-silver w-5 h-5 text-center rounded-full lg:hidden">
            0
          </p>

          <div>
            <p className="px-2 py-2 hidden lg:flex">سفارش ها 0</p>
            <p className="text-sm text-gray text-right px-2">تکمیل شده</p>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row-reverse w-64 items-center mx-4">
          <img
            alt="returnOrder"
            src={returnOrder}
            className="g:w-[64px] lg:h-[64px] w-[56px] h-[56px]"
          />
          <p className="absolute mr-10 mb-12 text-white bg-silver w-5 h-5 text-center rounded-full lg:hidden">
            0
          </p>

          <div>
            <p className="px-2 py-2 hidden lg:flex">سفارش ها 0</p>
            <p className="text-sm text-gray text-right px-2">مرجوع شده</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
