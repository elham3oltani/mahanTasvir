import React, { useEffect, useState } from "react";
import axios from "axios";
const InfoUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    const infoHandler = async () => {
      if (localStorage.getItem("isActive")) {
        try {
          const {
            data: [name, email, phone],
          } = await axios.get("https://mahantasvir.ir/edit-profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setEmail(email);
          setName(name);
          setPhone(phone);
        } catch (error) {
          console.log(error.data);
        }
      }
    };
    infoHandler();
  }, []);

  console.log(InfoUser);
  return (
    <div className="lg:w-5/6 w-full mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-around text-right items-center lg:w-5/6 float-right md:mx-0 mx-4 my-4">
        <div className="border-green-50 border  text-right rounded-xl lg:px-4 px-2 lg:w-[210px] lg:h-[90px] py-4 lg:items-center justify-between lg:flex-row-reverse flex-col">
          <label className="text-grey-10 pl-5">نام و نام خانوادگی</label>
          <p className="my-1 font-Nunito"> {name}</p>
        </div>

        <div className="border-green-50 border rounded-xl lg:px-4 px-2 py-4 lg:w-[210px] lg:h-[90px] items-end lg:items-center justify-between lg:flex-row-reverse flex-col">
          <label className="text-grey-10 pl-5">شماره موبایل</label>
          <p className="my-1">{phone}</p>
        </div>
        <div className="border-green-50 border rounded-xl font-Nunito text-sm lg:w-[210px] lg:h-[90px] lg:px-4 px-2 py-4  items-end lg:items-center justify-between lg:flex-row-reverse flex-col ">
          <label className="text-grey-10 pl-5">ایمیل</label>
          <p className="truncate my-1">{email}</p>
        </div>
        <div className="border-green-50 border rounded-xl px-4 py-4 lg:w-[210px] h-[90px] lg:items-center items-end justify-between lg:flex-row-reverse flex-col">
          <label className="text-grey-10 pl-5">شهر</label>
          <p className="my-1"></p>
        </div>
        <div className="border-green-50 border rounded-xl lg:px-4 px-2 py-4 lg:w-[210px] lg:h-[90px] lg:items-center items-end justify-between lg:flex-row-reverse flex-col">
          <label className="text-grey-10 pl-5">کد پستی </label>
          <p className="my-1"></p>
        </div>
        <div className="border-green-50 border rounded-xl lg:px-4 px-2 py-4 lg:w-[210px] lg:h-[90px] items-end lg:items-center justify-between lg:flex-row-reverse flex-col">
          <label className="text-grey-10 pl-5"> آدرس</label>
          <p className="my-1"></p>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
