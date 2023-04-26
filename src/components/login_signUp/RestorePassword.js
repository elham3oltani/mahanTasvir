import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RestorePassword = () => {
  const [emailCode, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");
  let navigate = useNavigate();
  const forgetPassHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        "https://mahantasvir.ir/api/password/reset/send",
        {
          params: {
            email: emailCode,
          },
        }
      );
      setMessage(res?.data);
      if (res?.status === 200) {
        setTimeout(() => {
          navigate("/verify_Code");
        }, 2000);
      }
      console.log(res);
      console.log(emailCode);
    } catch (e) {
      setErr(e?.response?.data?.errors.email[0]);
      console.log(e?.response?.data?.errors.email[0]);
      console.log(e.response);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="lg:w-[40%] w-full mx-3 md:w-[45%] xl:w-[30%] rounded-lg border-2 border-blue-200 h-auto max-h-[500px] flex flex-col justify-center">
        <Link to="/" className="text-center font-Nunito mt-4 text-orange-700">
          Mahan Tasvir
        </Link>

        <h2 className="text-center text-lg font-bold my-4">بازیابی رمز عبور</h2>
        <div className="text-center">
          <p className="text-green-500">{message}</p>
          <p className="text-red">{err}</p>
        </div>
        <div className="my-6 lg:w-80 flex flex-col justify-center mx-auto">
          <label className="mr-4 mb-1 text-right">ایمیل</label>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={emailCode}
            className="lg:w-80 w-64 border-2 border-orange-600 rounded-full pl-4 py-2 mx-auto  outline-none"
          />
        </div>
        <button
          onClick={forgetPassHandler}
          className="bg-blue-200 lg:w-80 w-64 text-white mx-auto rounded-full p-2 mt-4 mb-8"
          type="submit"
        >
          بازیابی رمز عبور
        </button>
      </div>
    </div>
  );
};

export default RestorePassword;
