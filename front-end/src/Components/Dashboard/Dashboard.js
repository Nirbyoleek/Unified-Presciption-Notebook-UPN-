import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Logo from "../../assets/logo.svg";
import HomeLogo from "../../assets/Home.svg";
import PrescriptionLogo from "../../assets/Prescription.svg";
import Doctor from "../../assets/doctor.svg";
import Settings from "../../assets/settings.svg";
import Header from "./Header";
import DoctorDetails from "./DoctorDetails";
import Patients from "../Admin/Patients";
import Home from "./Home";
import Prescription from "./Prescription";
import { motion } from "framer-motion";

function Dashboard() {
  const [homeActive, setHomeActive] = useState(true);
  const [presActive, setPresActive] = useState(false);
  const [doctorsActive, setDoctorsActive] = useState(false);
  return (
    <div className="flex">
      {/* SIDEBAR */}
      <div className="bg-[#499189] h-screen w-56 px-4 py-5">
        <div className="mb-36">
          <img src={Logo} alt="Logo" className="w-36 mx-auto" />
        </div>
        <div className="px-2 flex flex-col justify-center">
          <div
            className={
              homeActive
                ? "flex mb-8 mr-4  cursor-pointer bg-[#15645B] rounded-3xl justify-center py-2 px-4 text-center align-center"
                : "flex mb-8 mr-12 w-40 cursor-pointer p-2 "
            }
            onClick={() => {
              setHomeActive(true);
              setDoctorsActive(false);
              setPresActive(false);
            }}
          >
            <img src={HomeLogo} alt="Home" className="mr-4" />
            <h6 className="text-white">Home</h6>
          </div>
          <div
            className={
              presActive
                ? "flex mb-8 mr-4  w-40 cursor-pointer bg-[#15645B] rounded-3xl justify-center py-2 px-4 text-center align-center"
                : "flex mb-8 mr-12 w-40 cursor-pointer p-2  "
            }
            onClick={() => {
              setHomeActive(false);
              setPresActive(true);
              setDoctorsActive(false);
            }}
          >
            <img src={PrescriptionLogo} alt="Prescription" className="mr-4" />
            <h6 className="text-white">Prescription</h6>
          </div>
          <div
            className={
              doctorsActive
                ? "flex mb-8 w-40  cursor-pointer bg-[#15645B] rounded-3xl justify-center p-2 "
                : "flex mb-8 mr-4  cursor-pointer p-2 "
            }
            onClick={() => {
              setHomeActive(false);
              setPresActive(false);
              setDoctorsActive(true);
            }}
          >
            <img src={Doctor} alt="Doctors" className="mr-4" />
            <h6 className="text-white">My Doctors</h6>
          </div>
        </div>
      </div>
      <div className="bg-[#E5FFFE] w-[83.5vw] px-8 py-5">
        {/* HEADER */}
        <Header />

        {homeActive && <Home />}
        {doctorsActive && <DoctorDetails />}
        {presActive && <Prescription />}
      </div>
    </div>
  );
}

export default Dashboard;
