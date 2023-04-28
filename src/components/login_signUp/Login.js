import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail, MdOutlinePassword } from "react-icons/md";
import axios from "axios";
import logo from "../../images/logoo.png";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [warn, setWarning] = useState("");
  const token = localStorage.getItem("token");
  localStorage.setItem("isActive", isLoggedin);

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const res = await axios.post(
        "https://backend.mahantasvir.ir/api/login",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res?.status === 200 ) {
        setIsLoggedin(true);
        setTimeout(() => {
          navigate("/my-account/info-account");
          window.location.reload(true)
        }, 1000);
      }
else{
  localStorage.clear()
  navigate("/signup")
}
    
      setEmail("");
      setPass("");
    } catch (e) {
      const { data } = e.response;
      setWarning(data);
    }
  };
  return (
    <div className="flex items-center h-auto justify-center my-16 mx-4">
      <div className="lg:w-1/2 2xl:w-1/3 xl:w-1/3 md:w-1/2 w-full flex flex-col p-4 items-center border-2 border-blue-300  h-auto rounded-lg m-4">
        <Link
          to="/"
          className="text-orange-600 w-[90px] h-[80px] mobile:text-xl text-3xl mt-2 text-center font-Nunito"
        >
          <img src={logo} alt="" />
        </Link>

        <h1 className="font-bold text-xl m-3 text-blue-500">
          ورود به سایت ماهان تصویر
        </h1>
        <p className="text-red text-right">{warn}</p>
        {!isLoggedin ? (
          <>
            <form>
              <div className="mt-6 flex items-center lg:w-96 w-72 mobilel:w-80 mobile:w-64  border border-orange-600 rounded-full ">
                <MdOutlineAlternateEmail
                  size={22}
                  className="text-silver ml-4 mr-2 align-middle text-right"
                />
                <input
                  value={email}
                  type="text"
                  className="py-2.5 text-sm pl-1 outline-none w-full rounded-full"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="شماره موبایل یا ایمیل خود را وارد کنید"
                />
              </div>
              <div className="my-9 flex items-center lg:w-96 w-72 mobile:w-64  mobilel:w-80 border border-orange-600 rounded-full ">
                <MdOutlinePassword
                  size={22}
                  className="text-silver ml-4 mr-2 align-middle text-right"
                />
                <input
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  className="py-2.5 text-sm pl-1 outline-none w-full rounded-full"
                />
              </div>

              <div className="text-center mb-6 mt-10 ">
                <button
                  onClick={loginHandler}
                  className="text-lg rounded-full text-white mobilel:w-80 p-2 md:w-80 w-72 mobile:w-64 lg:w-96 bg-orange-700 text-[20px]"
                >
                  ورود
                </button>
                <div className="my-1 flex flex-col lg:flex-row mt-4 items-center lg:justify-between">
                  <Link to="/reset/pass" className="ml-2">
                    رمز عبور خود را فراموش کردید؟
                  </Link>
                  <div className="flex items-center justify-center mr-3 my-2">
                    <span className="block text-right mr-1 text-md">
                      مرا به خاطر بسپار
                    </span>
                    <input
                      type="checkbox"
                      className="rounded-full outline-none w-5 h-5"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-1 mb-2">
                <p className="text-lg mobile:text-[16px] mobile:text-center">
                  کاربر جدید هستید؟
                  <Link to="/signUp" className="font-bold text-bold mx-1">
                    <span className="text-orange-500">ثبت نام </span>
                    در ماهان تصویر
                  </Link>
                </p>
              </div>
              <div className="flex justify-center items-center mb-8 mt-4 rounded-full">
                <IoIosArrowBack className="text-white" />
                <Link to="/" className="font-bold mx-1.5">
                  بازگشت به سایت
                </Link>
              </div>
            </form>
          </>
        ) : (
          <>
            <p className="text-green-500 text-md">
              ورود به سایت با موفقیت انجام شد
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
