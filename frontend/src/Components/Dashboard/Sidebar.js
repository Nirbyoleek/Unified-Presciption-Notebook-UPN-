import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Home from "../../assets/Home.svg";
import Prescription from "../../assets/Prescription.svg";
import Doctor from "../../assets/doctor.svg";
import Settings from "../../assets/settings.svg";
function Sidebar() {
  const [homeActive, setHomeActive] = useState(false);
  const [presActive, setPresActive] = useState(false);
  const [doctorsActive, setDoctorsActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  return (
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
            setSettingsActive(false);
          }}
        >
          <img src={Home} alt="Home" className="mr-4" />
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
            setSettingsActive(false);
          }}
        >
          <img src={Prescription} alt="Prescription" className="mr-4" />
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
            setSettingsActive(false);
          }}
        >
          <img src={Doctor} alt="Doctors" className="mr-4" />
          <h6 className="text-white">My Doctors</h6>
        </div>
        <div
          className={
            settingsActive
              ? "flex mb-8 mr-4  cursor-pointer bg-[#15645B] rounded-3xl justify-center py-2 px-4 text-center align-center"
              : "flex mb-8 mr-4  cursor-pointer p-2 "
          }
          onClick={() => {
            setHomeActive(false);
            setPresActive(false);
            setDoctorsActive(false);
            setSettingsActive(true);
          }}
        >
          <img src={Settings} alt="Settings" className="mr-4" />
          <h6 className="text-white">Settings</h6>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
