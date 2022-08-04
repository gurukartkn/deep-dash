import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import HeroImage from "../public/assets/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-[#6257FE] text-white xl:mt-[-70px] xl:max-h-min">
      <div className="lg:flex">
        <div className="py-32 lg:w-1/3 lg:py-7 lg:px-4 xl:py-20 xl:px-28 xl:w-1/2">
          <div className="flex flex-col gap-3 md:gap-5 text-center items-center  p-5 md:p-4 lg:text-left lg:items-start">
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5, type: "spring" }}
              className="text-md md:text-lg "
            >
              We are Creative
            </motion.p>
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5, type: "spring" }}
              className="text-5xl md:text-6xl font-bold "
            >
              Digital Agency
            </motion.h2>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5, type: "spring" }}
              className="text-lg md:text-lg "
            >
              We pride ourselves in delivering world class outputs to all our
              customers.
            </motion.p>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5, type: "spring" }}
            >
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                className="bg-white text-black font-bold p-4 rounded-sm shadow-2xl text-center md:w-36 md:mt-5 cursor-pointer"
              >
                Get Started
              </motion.p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
          className="hidden lg:block lg:w-2/3 xl:w-1/2 pb-5"
        >
          <Image
            src={HeroImage}
            alt="hero-image"
            placeholder="blur"
            loading="lazy"
            className="rounded-bl-xl"
          ></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
