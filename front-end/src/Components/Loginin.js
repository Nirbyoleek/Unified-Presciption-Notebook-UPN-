import React, { useState } from "react";
import SignUp from "../assets/signup.svg";
import logo from "../assets/logo1.svg";
import emailicon from "../assets/icons/email.svg";

import passwordicon from "../assets/icons/password.svg";
import showpasswordicon from "../assets/icons/showpassword.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

AOS.init();

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setshow] = useState(false);

  localStorage.setItem("email", email);
  const handleSubmit = (e) => {
    e.preventDefault();
    const signUpData = new FormData();
    console.log(email, password);
    signUpData.append("email", email);
    signUpData.append("password", password);

    axios({
      method: "post",
      url: "http://20.204.137.225:5000/login",
      headers: { "Content-Type": "multipart/form-data" },
      data: signUpData,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          window.location.href = "/dashboard";
        } else {
          alert("Wrong Credentials");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = () => {
    // window.location.href = "/dashboard";
  };
  return (
    <div>
      <div className="flex">
        <div className="w-[50vw]">
          <div className="pt-2 px-24 ">
            <img src={logo} className="w-[7vw] h-[7vh]" />
          </div>

          <form
            onSubmit={handleSubmit}
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="px-40 pt-12 ">
              <div className="mt-12">
                <p className="text-[#23776E] font-extrabold text-4xl">
                  Patient Login
                </p>
              </div>
              <div class="relative border-b-2 p-2 focus-within:border-[#23776E] flex mt-12">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  class="block w-full appearance-none focus:outline-none  bg-transparent"
                  autoComplete="off"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <label
                  for="name"
                  class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
                >
                  E-Mail
                </label>
                <img src={emailicon} />
              </div>
            </div>

            <div className="px-40 pt-12 ">
              <div class="relative border-b-2 p-2 focus-within:border-[#23776E] flex">
                <input
                  type={show ? "text" : "password"}
                  name="name"
                  placeholder=" "
                  class="block w-full appearance-none focus:outline-none  bg-transparent"
                  autoComplete="off"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <label
                  for="name"
                  class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
                >
                  Password
                </label>
                <img
                  src={show ? showpasswordicon : passwordicon}
                  onClick={() => {
                    show ? setshow(false) : setshow(true);
                  }}
                />
              </div>
            </div>

            <div className="px-40 pt-12 ">
              <button
                className="bg-[#23776E] rounded-sm"
                onClick={() => {
                  login();
                }}
              >
                <p className="text-white py-4 w-[30vw]">Login</p>
              </button>
              <div className="justify-center mt-4 text-sm flex">
                <p className="mr-1">Don't have an account? </p>
                <strong>
                  <a href="/signup" className="text-[#23776E]">
                    Sign Up
                  </a>
                </strong>
              </div>
              <div className="justify-center mt-4 text-sm flex">
                <p className="mr-1">Are you Admin? </p>
                <strong>
                  <a href="/login/admin" className="text-[#23776E]">
                    Login Here
                  </a>
                </strong>
              </div>
            </div>
          </form>
        </div>

        <div className="w-[50vw] p-4">
          <img src={SignUp} className=" w-[150vh] h-[95vh] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;
