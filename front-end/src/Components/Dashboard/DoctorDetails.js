import React from "react";

function DoctorDetails() {
  return (
    <div>
      {" "}
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
  );
}

export default DoctorDetails;
