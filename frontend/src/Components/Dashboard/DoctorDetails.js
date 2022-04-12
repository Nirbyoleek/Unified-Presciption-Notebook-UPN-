import React from "react";
import User from "../../assets/User 2.svg";

function DoctorDetails() {
  const doctors = [
    {
      id: "1",
      name: "Dr. John Doe",
      degree: "M.B.B.S",
    },
    {
      id: "2",
      name: "Dr. Mayank Doe",
      degree: "M.D",
    },
    {
      id: "3",
      name: "Dr. Kanishk Bajaj",
      degree: "M.D",
    },
  ];

  return (
    <div>
      {" "}
      <div className="mt-20 bg-[#75c6bc7e] px-12 py-6 rounded-xl">
        {doctors.map((doc) => {
          return (
            <div className="flex mb-4">
              <img src={User} className="mr-4 mb-2" />

              <div>
                <p className="text-[#499189] font-bold text-xl">{doc.name}</p>
                <p className="text-[#499189] font-bold text-sm">{doc.degree}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DoctorDetails;
