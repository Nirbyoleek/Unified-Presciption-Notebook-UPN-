import React, {useState} from "react";
import SignUp from "../assets/signupd.svg";
import logo from "../assets/logo1.svg";
import emailicon from "../assets/icons/email.svg";
import user from "../assets/icons/user.svg";
import passwordicon from "../assets/icons/password.svg";
import showpasswordicon from "../assets/icons/showpassword.svg";

const LoginDoc = () => {

    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [show,setshow] = useState("")

    const login = () => {
        window.location.href = "/admin/dashboard"
    }

  return (
    <div>
      <div className="flex">
        <div className="w-[50vw]">
          <div className="pt-2 px-24 ">
            <img src={logo} className="w-[7vw] h-[7vh]" />
          </div>

          <div className="px-40 pt-12 ">
          <div className="mt-12">
              <p className="text-[#23776E] font-extrabold text-4xl">Doctor Login</p> 
            </div>
            <div class="relative border-b-2 p-2 focus-within:border-[#23776E] flex mt-12">
              <input
                type="text"
                name="name"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none  bg-transparent"
                autoComplete="off"
                onChange={()=>{setemail(email)}}
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
                onChange={()=> {setpassword(password)}}
              />
              <label
                for="name"
                class="absolute top-0 -z-1 text-[#B0B0B0] duration-300 origin-0 p-2"
              >
                Password
              </label>
              <img src={show ? showpasswordicon : passwordicon} onClick={()=>{show ? setshow(false) : setshow(true)}}/>
            </div>
          </div>

         

          <div className="px-40 pt-12 ">
            <button className="bg-[#23776E] rounded-sm" onClick={()=>{login()}}>
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
              <p className="mr-1">Are you a patient? </p>
              <strong>
                <a href="/login/patient" className="text-[#23776E]">
                  Login Here
                </a>
              </strong>
            </div>
          </div>
        </div>

        <div className="w-[50vw] p-4">
          <img src={SignUp} className=" w-[150vh] h-[95vh]  mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoginDoc;
