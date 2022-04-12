import React, { useState, useEffect } from "react";
import Calendar from "../../assets/calendar.svg";
import Clock from "../../assets/clock.svg";
import { motion } from "framer-motion";

import User from "../../assets/User 2.svg";
import axios from "axios";

function Header() {
  const [input, setInput] = useState("");
  const date = new Date().toLocaleDateString();
  var [time, setTime] = useState(new Date());

  const [name, setName] = useState();

  const email = localStorage.getItem("email");

  const emailData = new FormData();

  emailData.append("email", email);
  useEffect(() => {
    axios({
      method: "post",
      url: "http://20.204.137.225:5000/getdata",
      headers: { "Content-Type": "multipart/form-data" },
      data: emailData,
    }).then((response) => {
      console.log(response);
      setName(response.data.name);
    });
  }, []);
  if (!localStorage.getItem("email")) {
    window.location.href = "/login/admin";
  }
  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        default: { duration: 1 },
      }}
    >
      <div className="flex justify-between mb-6">
        <div className="flex ml-auto items-center ">
          <img className="mr-3 w-8" alt="User" src={User} />
          <h2 className="font-bold text-[#23776e]">{name}</h2>
          <button
            onClick={() => localStorage.removeItem("email")}
            className="p-2 px-4 bg-[#23776e] text-white rounded-xl mx-2 "
          >
            Sign out
          </button>
        </div>
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
