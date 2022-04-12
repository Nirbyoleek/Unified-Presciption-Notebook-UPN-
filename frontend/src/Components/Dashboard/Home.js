import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
function Home() {
  const [name, setName] = useState();

  const email = localStorage.getItem("email");

  const emailData = new FormData();

  emailData.append("email", email);
  useEffect(() => {
    axios({
      method: "post",
      url: "http://20.204.137.225:5000/getdata",
      headers: { "Content-Type": "multipart/form-data" },
      data: emailData,
    }).then((response) => {
      console.log(response);
      setName(response.data.name);
    });
  }, []);

  localStorage.setItem("name", name);

  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        default: { duration: 1 },
      }}
    >
      <div className="bg-[#75c6bc7e] w-[50vw] h-[30vh] p-10 m-auto  rounded-xl text-[#23776E] font-extrabold justify-center">
        Welcome {name}
      </div>
    </motion.div>
  );
}

export default Home;
