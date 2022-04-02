import React from "react";
import SignUp from "../assets/signuppatient.svg";
import logo from "../assets/logo1.svg";
import email from "../assets/icons/email.svg";
import user from "../assets/icons/user.svg";
import password from "../assets/icons/password.svg";

const Signup = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[50vw]">
          <div className="pt-2 px-24 ">
            <img src={logo} className="w-[7vw] h-[7vh]" />
          </div>

          <div className="px-40 pt-24">
            <div class="relative border-b-2 p-2 focus-within:border-[#23776E] flex">
              <input
                type="text"
                name="name"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none  bg-transparent"
                autoComplete="false"
              />
              <label
                for="name"
                class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
              >
                Name
              </label>
              <img src={user} />
            </div>
          </div>

          <div className="px-40 pt-12 ">
            <div class="relative border-b-2 p-2 focus-within:border-[#23776E] flex">
              <input
                type="text"
                name="name"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none  bg-transparent"
                autoComplete="false"
              />
              <label
                for="name"
                class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
              >
                E-Mail
              </label>
              <img src={email} />
            </div>
          </div>

          <div className="px-40 pt-12 ">
            <div class="relative border-b-2 p-2 focus-within:border-[#23776E] flex">
              <input
                type="text"
                name="name"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none  bg-transparent"
                autoComplete="false"
              />
              <label
                for="name"
                class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
              >
                Password
              </label>
              <img src={password} />
            </div>
          </div>

          <div className="px-40 pt-12 ">
            <div class="relative border-b-2 p-2 focus-within:border-[#23776E] flex">
              <input
                type="text"
                name="name"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none  bg-transparent"
                autoComplete="false"
              />
              <label
                for="name"
                class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
              >
                Confirm Password
              </label>
              <img src={password} />
            </div>
          </div>

          <div className="px-40 pt-12 ">
            <button className="bg-[#23776E] rounded-sm">
              <p className="text-white py-4 w-[30vw]">Sign Up</p>
            </button>
            <div className="justify-center mt-4 text-sm flex">
              <p className="mr-1">Already have an account? </p>
              <strong>
                <a href="/login" className="text-[#23776E]">
                  Login
                </a>
              </strong>
            </div>
          </div>
        </div>

        <div className="w-[50vw] p-4">
          <img src={SignUp} className=" w-200 h-[95vh]  mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
