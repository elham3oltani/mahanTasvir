import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const VerifyCode = () => {
  const [verify, setVerify] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");
  const [messageRes, setMessageRes] = useState("");
  const token = localStorage.getItem("token");

  let navigate = useNavigate();
  const verifyHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://backend.mahantasvir.ir/api/email/verify",
        {
          verify_code: parseInt(verify),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res?.data?.message) {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }

      setMessage(res?.data.message);

      setIsActive(true);
    } catch (e) {
      setErr(e.response?.data?.errors?.verify_code[0]);
    }
    setVerify("");
  };

  const resntHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://backend.mahantasvir.ir/api/email/resend",
        {
          verify_code: parseInt(verify),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res?.data.status === 200) {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }

      setMessageRes(res?.data);
    } catch (e) {}
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="lg:w-[40%] 2xl:w-[35%] w-full mx-3 md:w-[45%] xl:w-[30%] rounded-lg border-2 border-blue-200 h-auto max-h-[500px] flex flex-col justify-center">
        <h2 className="text-center text-lg font-bold mt-8 mb-4">
          کد ارسال شده به ایمیل خود را وارد کنید
        </h2>
        <div className="text-center ">
          <p className="text-red">{err}</p>
          <p className="text-green-500">{message}</p>
          <p className="text-green-500">{messageRes}</p>
        </div>
        <form onSubmit={verifyHandler}>
          <div className="my-6 w-64 lg:w-80 flex flex-col justify-center mx-auto">
            <label className="w-full pr-3 mb-1 text-right">کد 6 رقمی</label>
            <input
              type="text"
              name="verify_code"
              onChange={(e) => setVerify(e.target.value)}
              value={verify}
              className="lg:w-80 w-64 border-2 border-orange-600 rounded-full pl-4 py-2 mx-auto  outline-none"
            />
          </div>
          <div className="flex justify-center">
            <button
              className={`bg-blue-200 lg:w-80 w-64 text-white rounded-full p-2 mt-1 mb-6 ${
                isActive ? "bg-transparent text-white" : ""
              }`}
              type="submit"
            >
              ارسال
            </button>
          </div>
          <button
            className="border border-orange-500 rounded-md px-1.5 py-1 ml-6 mb-6"
            onClick={resntHandler}
          >
            ارسال مجدد کد
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
