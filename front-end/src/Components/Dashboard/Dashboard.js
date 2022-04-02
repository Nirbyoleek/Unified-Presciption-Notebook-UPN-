import React from "react";
import Sidebar from "./Sidebar";
import Calendar from "../../assets/calendar.svg";
import Clock from "../../assets/clock.svg";
import Search from "../../assets/search.svg";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#E5FFFE] w-[83.5vw] px-8 py-5">
        <div className="flex justify-between mb-6">
          <div class="relative px-4 py-2 bg-[#499189]  rounded-2xl flex justify-center w-[25vw]">
            <img src={Search} alt="search" className="h-5 mr-2" />
            <input
              type="text"
              name="name"
              className="block w-full appearance-none rounded-xl text-white bg-[#499189] focus:outline-none"
            />
          </div>

          <div>User</div>
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
        <div className="mt-20 bg-[#75c6bc7e] px-12 py-6 rounded-xl">
          <div className="flex mb-4">
            <div className="mr-4">Icon</div>
            <div>
              <p className="text-[#499189] font-bold text-xl">Dr. John Doe</p>
              <p className="text-[#499189] font-bold text-sm">M.B.B.S</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
