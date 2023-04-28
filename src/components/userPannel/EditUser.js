import React, { useState } from "react";
import axios from "axios";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [res, setRes] = useState("");

  const token = localStorage.getItem("token");

  const editUser = async (e) => {
    e.preventDefault();
    let data = { name, mobile, email, password, password_confirmation };
    try {
      const res = await axios.post(
        "https://mahantasvir.ir/edit-profile",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRes(res?.data);
      setName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setPassword_confirmation("");
    } catch (e) {
      const { data } = e.response;
    }
  };

  return (
    <div className="lg:w-4/6 w-full bg-grey-0 h-auto px-6 py-6 rounded-md mx-auto">
      <div>
        <p className="text-center text-green-500">{res}</p>

        <div className="flex-col flex">
          <label className="text-right mr-2">
            <span className="text-[26px] h-fit text-red">*</span>
            نام کاربری
          </label>
          <input
            value={name}
            type="text"
            placeholder=""
            className="border border-silver py-2 outline-none text-right rounded-lg pr-4"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex-col flex">
          <label className="text-right mr-2">
            <span className="text-[26px] h-fit text-red">*</span>
            ایمیل
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder=""
            className="border border-silver py-2 outline-none text-right rounded-lg pr-4"
          />
        </div>

        <div className="flex-col flex">
          <label className="text-right mr-2">
            <span className="text-[26px] h-fit text-red">*</span>
            شماره موبایل
          </label>
          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="text"
            placeholder=""
            className="border border-silver py-2 outline-none text-right rounded-lg pr-4"
          />
        </div>

        <div className="flex-col flex">
          <label className="text-right mr-2">
            <span className="text-[26px] h-fit text-grey-0">*</span>
            گذرواژه جدید
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder=""
            className="border border-silver py-2 outline-none text-right rounded-lg pr-4"
          />
        </div>

        <div className="flex-col flex">
          <label className="text-right mr-2">
            <span className="text-[26px] h-fit text-grey-0">*</span>
            تغییر گذرواژه جدید
          </label>
          <input
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
            type="password"
            placeholder=""
            className="border border-silver py-2 outline-none text-right rounded-lg pr-4"
          />
        </div>
      </div>
      <div className=" ">
        <button
          className="bg-green-500 text-white w-fit float-right rounded-md px-4 py-2 my-8"
          onClick={editUser}
        >
          ثبت تغییرات
        </button>
      </div>
    </div>
  );
};

export default EditUser;
