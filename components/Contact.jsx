import Image from "next/image";

import { motion } from "framer-motion";

import Map from "../public/assets/map.png";

const Contact = () => {
  return (
    <div className="lg:flex">
      <div className="p-10 lg:w-2/3 xl:p-32 text-center xl:text-left">
        <motion.p
          initial={{ x: -600, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-[#6257FE] pb-3 xl:text-md"
        >
          Keep in touch
        </motion.p>
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-[#100C46] font-bold text-3xl pb-5 lg:text-4xl xl:text-5xl"
        >
          Contact us
        </motion.h1>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex flex-col gap-3 text-left"
        >
          <div className="bg-[#F4F3FF] text-[#100C46] flex flex-col py-2 px-5">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="bg-[#F4F3FF]" />
          </div>
          <div className="bg-[#F4F3FF] text-[#100C46] flex flex-col py-2 px-5">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="bg-[#F4F3FF]" />
          </div>
          <div className="bg-[#F4F3FF] text-[#100C46] flex flex-col py-2 px-5">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="bg-[#F4F3FF]" />
          </div>
          <motion.p
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
            className="bg-[#6257FE] p-5 rounded-sm shadow-2xl text-white text-center font-bold cursor-pointer"
          >
            Send Message
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 600, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="hidden lg:block lg:w-2/3 xl:w-1/2 p-5"
      >
        <Image src={Map} alt="map"></Image>
      </motion.div>
    </div>
  );
};

export default Contact;
