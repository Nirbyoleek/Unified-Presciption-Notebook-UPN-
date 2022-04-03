import React from "react";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        default: { duration: 1 },
      }}
    >
      <div className="bg-[#75c6bc7e] w-[50vw] h-[30vh] p-10 m-10 rounded-xl">
        Home Content
      </div>
      <div className="bg-[#75c6bc7e] w-[50vw] h-[30vh] p-10 m-10 rounded-xl">
        Home Content
      </div>
    </motion.div>
  );
}

export default Home;
