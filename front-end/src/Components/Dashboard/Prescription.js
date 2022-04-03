import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Prescription() {
  const email = localStorage.getItem("email");
  const emailData = new FormData();
  emailData.append("email", email);
  const [Pres, setPres] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://20.204.137.225:5000/getpath",
      headers: { "Content-Type": "multipart/form-data" },
      data: emailData,
    })
      .then((response) => {
        console.log(response.data.path);
        setPres(response.data.path);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-[70vw] h-[70vh] p-4 m-4 bg-[#75c6bc7e] overflow-y-scroll  rounded-2xl">
      <div className="mb-2 font-extrabold text-[#499189] ">Prescription</div>
      <div className="mb-6 font-extrabold text-[#499189] ">John Doe</div>
      <div>
        {Pres.map((p) => {
          return <>
          <img src={p} alt="Prescription" className="mx-auto"/></>;
        })}
      </div>
    </div>
  );
}

export default Prescription;
