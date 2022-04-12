import React, { useState, useEffect } from "react";
import Calendar from "../../assets/calendar.svg";
import Clock from "../../assets/clock.svg";
import Search from "../../assets/search.svg";
import User from "../../assets/User 2.svg";
import { motion } from "framer-motion";

function Header() {
  const [input, setInput] = useState("");
  const date = new Date().toLocaleDateString();
  var [time, setTime] = useState(new Date());
  const email = localStorage.getItem("email");
  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  if (!localStorage.getItem("email")) {
    window.location.href = "/login/patient";
  }
  const name = localStorage.getItem("name");
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        default: { duration: 1 },
      }}
    >
      <div className="flex justify-between mb-6">
        <div class="relative px-4 py-2 bg-[#499189]  rounded-2xl flex justify-center w-[25vw]">
          <img src={Search} alt="search" className="h-5 mr-2" />
          <input
            type="text"
            name="name"
            onChange={(e) => setInput(e.target.value)}
            className="block w-full appearance-none rounded-xl text-white bg-[#499189] focus:outline-none"
          />
        </div>

        <motion.div
          initial={{ x: 30 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1,

            default: { duration: 2 },
          }}
          className="flex justify-center items-center"
        >
          <img className="mr-3 w-8" alt="User" src={User} />
          <h2 className="font-bold">{name}</h2>
          <button
            className="p-2 px-4 ml-2 bg-[#23776E] text-white rounded-lg"
            onClick={() => {
              localStorage.removeItem("email");
            }}
          >
            Sign Out
          </button>
        </motion.div>
      </div>
      <div className="flex">
        <div className="flex mx-4">
          <img src={Calendar} alt="calendar" className="w-5 mr-3" />
          <h3 className="font-extrabold text-[#23776E]">{date}</h3>
        </div>
        <div className="flex">
          <img src={Clock} alt="clock" className="w-5 mr-3" />
          <h3 className="font-extrabold text-[#23776E]">
            {time.toLocaleTimeString()}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
