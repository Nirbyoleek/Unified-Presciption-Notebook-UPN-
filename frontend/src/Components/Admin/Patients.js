import React, { useState } from "react";

import Edit from "../../assets/edit.png";

import Remove from "../../assets/Remove.png";
import User from "../../assets/User 2.svg";
import Search from "../../assets/search.svg";
import axios from "axios";

function Patients() {
  const [input, setInput] = useState("");
  const name = localStorage.getItem("name");
  const onSubmit = (e) => {
    e.preventDefault();
    const nameData = new FormData();
    nameData.append("name", input);
    axios({
      method: "post",
      url: "http://20.204.137.225:5000/search",
      headers: { "Content-Type": "multipart/form-data" },
      data: nameData,
    }).then((response) => {
      if (response.data.name === input) {
      }
      console.log(response);
    });
  };
  const patients = [
    {
      id: "1",
      name: name,
    },
  ];

  return (
    <div className="mt-4">
      <div class="relative mx-auto px-4 py-2 bg-[#499189]  rounded-2xl flex justify-center w-[40vw]">
        <img src={Search} alt="search" className="h-5 mr-2" />
        <input
          type="text"
          name="name"
          onChange={(e) => setInput(e.target.value)}
          onClick={onSubmit}
          className="block w-full appearance-none rounded-xl text-white bg-[#499189] focus:outline-none"
        />
      </div>
      <div className=" mx-auto mt-12 flex flex-wrap w-[60vw] justify-between">
        {patients.map((pat) => {
          return (
            <div className="  w-[60vw] h-[20vh] bg-[#75c6bc7e] mr-2 mb-5 p-8 rounded-3xl flex justify-around">
              <div className="flex  items-center">
                <img src={User} className="w-8 mr-4" />
                <p className="mr-20 text-[#499189]">{pat.name}</p>
              </div>
              <div className="flex px-4 items-center ">
                <img
                  src={Edit}
                  onClick={() => {
                    window.location.href = "/canvas";
                  }}
                  className="w-6 h-6 mr-2 cursor-pointer"
                />
                <img src={Remove} className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Patients;
