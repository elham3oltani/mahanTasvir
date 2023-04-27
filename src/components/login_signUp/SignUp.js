import React, { useState, createContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import logo from "../../images/logoo.png"
import {
  AiOutlineUserAdd,
  AiOutlineNumber,
} from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineAlternateEmail, MdOutlinePassword } from "react-icons/md";
export const AuthContext = createContext();
const SignUp = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  let [error, setError] = useState("");
  let [res, setRes] = useState("");
  const postHandler = async (e) => {
    e.preventDefault();
    let data = { name, mobile, email, password, password_confirmation };
    console.log(data);
    try {
      const res = await axios.post("https://mahantasvir.ir/api/register", data);
      console.log(res);
      setRes(res?.data?.message);
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("info",JSON.stringify(data.name))

      console.log(res?.data.token);
      if (res?.data.message) {
        setTimeout(() => {
          navigate("/verify_code");
        }, 3000);
      }
    }
     catch (e) {
      const { data } = e.response;
      setError(data);
    }
  };
  console.log(error);
  console.log(res);
  const [meterMob, setMeterMob] = useState(false);
  const [meterEmial, setMeterEmail] = useState(false);
  const [meterPass, setMeterPass] = useState(false);
  const [meterUser, setMeterUser] = useState(false);
  var stringpattern = /(\+?98|098|0|0098)?(9\d{9})/;
  const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const sixChars = /.{6,}/g; // six characters or more
  const atLeastOneUpperCase = /[A-Z]/g;
  const specialCharacter = /[!@#%&]/g;
  const userRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  const passwordTracker = {
    lowercase: password.match(atLeastOneLowercase),
    number: password.match(atLeastOneNumeric),
    sixCharsOrGreater: password.match(sixChars),
    specialCharacter: password.match(specialCharacter),
    atLeastOneUpperCase: password.match(atLeastOneUpperCase),
  };
  const emailTracker = {
    email: email.match(emailRegx),
  };
  const mobileTracker = {
    NumMobile: mobile.match(stringpattern),
  };

  const userTracker = {
    name: name.match(userRegex),
  };
  return (
    <>
      <div className="flex items-center w-full justify-center mx-auto lg:my-4 my-8 px-2">
        <div className="lg:w-1/2 md:w-2/3 xl:w-1/3 w-full flex flex-col p-4 items-center border-2 border-blue-300 h-auto rounded-md m-2">
          <Link to="/" className="text-orange-600 w-[90px] h-[80px] mobile:text-xl text-3xl mt-2 text-center font-Nunito">
            <img src={logo} alt="" />
          </Link>
          <Link className="font-bold lg:text-xl text-lg text-center m-4 text-blue-500">
            به سایت ماهان گستر خوش آمدید
          </Link>
          {res ? (
            <h1 className="text-green-500 text-right">{res}</h1>
          ) : (
            <h1 className="text-right text-red">{error}</h1>
          )}
          <form onSubmit={postHandler} >
            <div className="my-6 mx-auto">
              <div className="flex items-center w-full border border-orange-600 rounded-full ">
                <AiOutlineUserAdd
                  size={22}
                  className="text-silver ml-4 mr-2 align-middle text-right"
                />
                <input
                  placeholder="نام کاربری"
                  name="name"
                  onFocus={() => setMeterUser(true)}
                  value={name}
                  type="text"
                  className="py-2.5 text-sm lg:pl-1.5 pl-2 outline-none w-full rounded-full"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {meterUser && (
                <p className="text-right mr-4 text-sm text-red ">
                  {!userTracker.name && "نام کاربری بین 8 تا 20 کاراکتر"}
                </p>
              )}
            </div>
            <div className="my-8 ">
              <div className="flex items-center w-full border border-orange-600 rounded-full">
                <MdOutlineAlternateEmail
                  size={22}
                  className="text-silver ml-4 mr-2 align-middle text-right"
                />
                <input
                  placeholder="ایمیل"
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setMeterEmail(true)}
                  name="email"
                  value={email}
                  type="text"
                  className="py-2.5 text-sm outline-none w-full lg:pl-1.5 rounded-full"
                />
              </div>
              {meterEmial && (
                <p className="text-right text-sm mr-4 text-red">
                  {!emailTracker.email && "ایمیل نامعتبر"}
                </p>
              )}
            </div>

            <div className="my-8">
              <div className="flex items-center border border-orange-600 rounded-full">
                <AiOutlineNumber
                  size={22}
                  className="text-silver ml-4 mr-2 align-middle text-right"
                />
                <input
                  onChange={(e) => setMobile(e.target.value)}
                  name="mobile"
                  type="text"
                  value={mobile}
                  onFocus={() => setMeterMob(true)}
                  className="py-2.5 text-sm outline-none w-full lg:pl-1.5 rounded-full"
                  placeholder="موبایل"
                />
              </div>
              {meterMob && (
                <div className="text-red mr-4  text-right text-sm">
                  {!mobileTracker.NumMobile && "شماره تلفن با ۹ شروع شود"}
                </div>
              )}
            </div>

            <div className="my-8">
              <div className="flex items-center w-full border border-orange-600 rounded-full">
                <MdOutlinePassword
                  size={22}
                  className="text-silver ml-4 mr-2 align-middle text-right"
                />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  onFocus={() => setMeterPass(true)}
                  value={password}
                  type="password"
                  className="py-2.5 text-sm outline-none w-full lg:pl-1.5 rounded-full"
                  placeholder="رمز عبور خود را وارد کنید"
                />
              </div>
              {meterPass && (
                <div className="text-red mr-4 text-right text-sm">
                  {!passwordTracker.sixCharsOrGreater &&
                    " پسورد شامل 6 کاراکتر،"}
                  {!passwordTracker.lowercase && "حروف کوچیک "}
                  {!passwordTracker.atLeastOneUpperCase && "و حروف بزرگ "}
                  {!passwordTracker.number && "عدد،"}
                  {!passwordTracker.specialCharacter && "  و کاراکتر خاص"}
                </div>
              )}
            </div>

            <div className="flex w-full items-center my-6 border border-orange-600 rounded-full">
              <GiConfirmed
                size={22}
                className="text-silver ml-4 mr-2 align-middle text-right"
              />
              <input
                value={password_confirmation}
                name="password_confirmation"
                onChange={(e) => setPassword_confirmation(e.target.value)}
                type="password"
                className="py-2.5 text-sm outline-none w-full lg:pl-1.5 rounded-full"
                placeholder="رمز عبور خود را تکرار کنید"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-md">
                آیا حساب کاربری دارید؟
                <Link to="/login" className="font-bold  text-lg text-bold">
                  ورود
                </Link>
              </p>
            </div>

            <div className="bg-blue-300 w-72 mobile:w-64 mobilem:w-72  md:w-96 lg:w-96 text-white text-center p-2 my-4 rounded-full">
              <button className="text-[18px]" type="submit">
                ثبت نام
              </button>
            </div>

            <div className="flex justify-center items-center rounded-full">
              <IoIosArrowBack className="text-white" />
              <Link to="/home">بازگشت به سایت</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
