import Image from "next/image";

import { motion } from "framer-motion";

import AboutImage from "../public/assets/about.png";

const About = () => {
  return (
    <div className="lg:flex">
      <div className="bg-[#100C46] p-10 md:p-24 lg:w-1/2 lg:p-10 xl:p-32 2xl:w-2/3">
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1.5, type: "spring" }}
          className="text-[#6257FE] pb-3 xl:text-md"
        >
          Who we are
        </motion.p>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1.5, type: "spring" }}
          className="text-[#6257FE] font-bold text-3xl pb-5 lg:text-4xl xl:text-5xl"
        >
          About Agency
        </motion.h3>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1.5, type: "spring" }}
          className="text-white font-thin py-3 lg:text-md xl:text-xl"
        >
          Our company philosophy is to create the kind of website that most
          business want: easy to find, stylish and applealing, quick loading,
          mobile responsive and easy to buy from.
        </motion.p>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5, type: "spring" }}
          className="text-white font-thin py-3 lg:text-md xl:text-xl"
        >
          Trained as industrial designers, we have a deep rooted belief in
          rational function and sustainable aesthetics. Our methodical approach
          is focused on revealing the essence of each design challenge to allow
          us to create holistic and durable solutions.
        </motion.p>
      </div>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1.5, type: "spring" }}
        className="hidden lg:block lg:w-1/2 xl:ml-[-120px] xl:mt-[25px] 2xl:m-0 2xl:w-1/3"
      >
        <Image
          src={AboutImage}
          alt="about-image"
          placeholder="blur"
          loading="lazy"
        ></Image>
      </motion.div>
    </div>
  );
};

export default About;
