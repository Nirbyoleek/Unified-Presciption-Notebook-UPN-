import React, { useState, useEffect } from "react";
import Calendar from "../../assets/calendar.svg";
import Clock from "../../assets/clock.svg";

import User from "../../assets/User 2.svg";

function Header() {
  const [input, setInput] = useState("");
  const date = new Date().toLocaleDateString();
  var [time,setTime] = useState(new Date());
  const email = localStorage.getItem('email')
  useEffect(() => {
    var timer = setInterval(()=>setTime(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }

});
if(!localStorage.getItem("email")){
  window.location.href="/login/admin";
}
  return (
    <div>
      <div className="flex justify-between mb-6">
        

        <div className="flex ml-auto ">
          <img className="mr-3 w-8" alt="User" src={User} />
          <h2 className="font-bold">Bruh Singh</h2>
          <button className="p-2 px-4 ml-2 bg-[#23776E] text-white rounded-lg" onClick={()=>{
            localStorage.removeItem('email')
          }}>Sign Out</button>
        </div>
      </div>
      <div className="flex">
        <div className="flex mx-4">
          <img src={Calendar} alt="calendar" className="w-5 mr-3" />
          <h3 className="font-extrabold text-[#23776E]">{date}</h3>
        </div>
        <div className="flex">
          <img src={Clock} alt="clock" className="w-5 mr-3" />
          <h3 className="font-extrabold text-[#23776E]">{time.toLocaleTimeString()}</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
