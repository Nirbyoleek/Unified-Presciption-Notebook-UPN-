import React from "react";
import SignUp from "../assets/signuppatient.svg";
import logo from "../assets/logo1.svg";

const Signup = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[50vw]">
          <div className="pt-2 px-24 ">
            <img src={logo} className="w-[7vw] h-[7vh]" />
          </div>

          <div className="p-24">
            <div class="relative border-b-2 p-2 focus-within:border-[#23776E]">
              <input
                type="text"
                name="name"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none  bg-transparent"
              />
              <label
                for="name"
                class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
              >
                Name
              </label>
            </div>

            <div class="relative border-b-2 p-2 focus-within:border-[#23776E]">
              <input
                type="text"
                name="name"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none  bg-transparent"
              />
              <label
                for="name"
                class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
              >
                Username
              </label>
            </div>

            <div class="relative border-b-2 p-2 focus-within:border-[#23776E]">
              <input
                type="text"
                name="username"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none  bg-transparent"
              />
              <label
                for="username"
                class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
              >
                Username
              </label>
            </div>

            <div class="relative border-b-2 p-2 focus-within:border-[#23776E]">
              <input
                type="text"
                name="username"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none  bg-transparent"
              />
              <label
                for="username"
                class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className="w-[50vw] p-4">
          <img src={SignUp} className=" w-200 h-[95vh]  ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
