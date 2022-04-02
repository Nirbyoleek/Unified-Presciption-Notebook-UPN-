import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DoctorDetails from "./DoctorDetails";
import Patients from "./Patients";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#E5FFFE] w-[83.5vw] px-8 py-5">
        <Header />
        {/* <DoctorDetails /> */}
        <Patients />
      </div>
    </div>
  );
}

export default Dashboard;
