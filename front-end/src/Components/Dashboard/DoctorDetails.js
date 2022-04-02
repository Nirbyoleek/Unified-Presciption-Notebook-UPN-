import React from "react";
import User from "../../assets/User 2.svg";

function DoctorDetails() {
  const doctors = [
    {
      id: "1",
      name: "Dr. John Doe",
      degree: "M.B.B.S",
    },
  ];

  return (
    <div>
      {" "}
      <div className="mt-20 bg-[#75c6bc7e] px-12 py-6 rounded-xl">
        <div className="flex mb-4">
          <img src={User} className="mr-4">
            Icon
          </img>
          <div>
            <p className="text-[#499189] font-bold text-xl">Dr. John Doe</p>
            <p className="text-[#499189] font-bold text-sm">M.B.B.S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
