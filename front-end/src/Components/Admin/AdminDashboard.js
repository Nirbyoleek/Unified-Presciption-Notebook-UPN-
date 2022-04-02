import React, { useState } from "react";

import Patients from "./Patients";

import Logo from "../../assets/logo.svg";
import HomeLogo from "../../assets/Home.svg";
import PrescriptionLogo from "../../assets/Prescription.svg";
import Doctor from "../../assets/doctor.svg";

import Header from "../Dashboard/Header";

import Home from "../Dashboard/Home";
import Prescription from "../Dashboard/Prescription";

function AdminDashboard() {
  const [homeActive, setHomeActive] = useState(true);
  const [presActive, setPresActive] = useState(false);
  const [patientsActive, setPatientsActive] = useState(false);
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
              setPatientsActive(false);
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
              setPatientsActive(false);
            }}
          >
            <img src={PrescriptionLogo} alt="Prescription" className="mr-4" />
            <h6 className="text-white">Prescription</h6>
          </div>
          <div
            className={
              patientsActive
                ? "flex mb-8 w-48  cursor-pointer bg-[#15645B] rounded-3xl justify-center p-2 "
                : "flex mb-8 w-48 mr-4  cursor-pointer p-2 "
            }
            onClick={() => {
              setHomeActive(false);
              setPresActive(false);
              setPatientsActive(true);
            }}
          >
            <img src={Doctor} alt="Doctors" className="mr-4" />
            <h6 className="text-white">Patient Record</h6>
          </div>
        </div>
      </div>
      <div className="bg-[#E5FFFE] w-[83.5vw] px-8 py-5">
        {/* HEADER */}
        <Header />

        {homeActive && <Home />}

        {presActive && <Prescription />}
        {patientsActive && <Patients />}
      </div>
    </div>
  );
}

export default AdminDashboard;
