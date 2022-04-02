import React, { useState } from "react";
import Calendar from "../../assets/calendar.svg";
import Clock from "../../assets/clock.svg";
import Search from "../../assets/search.svg";
import User from "../../assets/User 2.svg";

function Header() {
  const [input, setInput] = useState("");

  return (
    <div>
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

        <div className="flex justify-center items-center">
          <img className="mr-3 w-8" alt="User" src={User} />
          <h2 className="font-bold">Bruh Singh</h2>
        </div>
      </div>
      <div className="flex">
        <div className="flex mx-4">
          <img src={Calendar} alt="calendar" className="w-5 mr-3" />
          <h3>2nd April 2022</h3>
        </div>
        <div className="flex">
          <img src={Clock} alt="clock" className="w-5 mr-3" />
          <h3>10 : 10 PM</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
