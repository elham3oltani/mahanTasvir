import axios from "axios";
import React, { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail, MdOutlinePassword } from "react-icons/md";
const RestorePass = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [meterEmial, setMeterEmail] = useState(false);
  const [meterPass, setMeterPass] = useState(false);
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");
  const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const sixChars = /.{6,}/g; // six characters or more
  const atLeastOneUpperCase = /[A-Z]/g;
  const specialCharacter = /[!@#\$%\^&\*]/g;
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
  const restorePass = async (e) => {
    let data = { email, password, password_confirmation };
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://mahantasvir.ir/api/password/change",
        data
      );
      if (res?.status === 200) {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      console.log(res);
      setMessage(res?.data);
      console.log(res?.status);
    } catch (error) {
      if (error.response.status === 422) {
        setErr("تغییر رمز شما انجام نشد مجددا تلاش کنید");
      }
      console.log(error.response.status);
    }
  };
  return (
    <>
      <div className="flex items-center w-full h-screen justify-center mx-auto my-auto">
        <div className="lg:w-1/2 md:w-1/2 xl:w-1/3 w-full flex flex-col p-4 items-center border-2 border-blue-300 h-auto rounded-md m-2">
          <h2 className="text-center text-lg font-bold my-4">
            بازیابی رمز عبور
          </h2>
          <div className="text-center">
            <p className="text-green-500">{message}</p>
            <p className="text-red">{err}</p>
          </div>
          <form onSubmit={restorePass}>
            <div className="my-8 ">
              <div className="flex items-center lg:w-96 w-72 mobile:w-64 border border-orange-600 rounded-full">
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
                  className="py-2.5 text-sm outline-none w-full pl-1.5 rounded-full"
                />
              </div>
              {meterEmial && (
                <p className="text-right text-sm mr-4 text-red p-0 m-0">
                  {!emailTracker.email && "ایمیل نامعتبر"}
                </p>
              )}
            </div>

            <div className="my-8">
              <div className="flex items-center lg:w-96 w-72 mobile:w-64 border border-orange-600 rounded-full">
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
                  className="py-2.5 text-sm outline-none w-full pl-1.5 rounded-full"
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

            <div className="flex items-center my-6 lg:w-96 w-72 mobile:w-64 border border-orange-600 rounded-full">
              <GiConfirmed
                size={22}
                className="text-silver ml-4 mr-2 align-middle text-right"
              />
              <input
                value={password_confirmation}
                name="password_confirmation"
                onChange={(e) => setPassword_confirmation(e.target.value)}
                type="password"
                className="py-2.5 text-sm outline-none w-full pl-1.5 rounded-full"
                placeholder="رمز عبور خود را تکرار کنید"
              />
            </div>
            <button className="bg-blue-200 lg:w-96 w-64 text-white mx-auto rounded-full p-2 mt-4 mb-8">
              بازیابی رمز عبور
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RestorePass;
