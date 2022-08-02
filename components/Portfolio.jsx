import Image from "next/image";

import { motion } from "framer-motion";

import Portfolio1 from "../public/assets/portfolio1.png";
import Portfolio2 from "../public/assets/portfolio2.png";
import Portfolio3 from "../public/assets/portfolio3.png";
import Portfolio4 from "../public/assets/portfolio4.png";

const Portfolio = () => {
  return (
    <div className="text-center p-10">
      <motion.p
        initial={{ y: -600, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-[#6257FE] pb-3 xl:text-md"
      >
        Our works
      </motion.p>
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-[#100C46] font-bold text-3xl pb-5 lg:text-4xl xl:text-5xl"
      >
        Portfolio
      </motion.h1>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="flex flex-wrap gap-2 justify-center"
      >
        <Image src={Portfolio1} alt="portfolio1" />
        <Image src={Portfolio2} alt="portfolio2" />
        <Image src={Portfolio3} alt="portfolio3" />
        <Image src={Portfolio4} alt="portfolio4" />
      </motion.div>
    </div>
  );
};

export default Portfolio;
