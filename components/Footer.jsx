import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="text-center p-10 bg-[#6257FE]"
    >
      <div className="text-white flex flex-wrap gap-10 justify-center md:justify-evenly mb-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          className="max-w-sm"
        >
          <h3 className="font-bold lg:text-xl">Phone</h3>
          <p className="font-thin lg:text-md">+91 88995 56645</p>
          <p className="font-thin lg:text-md">04288 569 896</p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
          className="max-w-sm"
        >
          <h3 className="font-bold lg:text-xl">Email</h3>
          <p className="font-thin lg:text-md">admin@deepdive.com</p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, type: "spring" }}
          className="max-w-sm"
        >
          <h3 className="font-bold lg:text-xl">Address</h3>
          <p className="font-thin lg:text-md">25, 5th Cross Street, </p>
          <p className="font-thin lg:text-md">Bhommana Halli, </p>
          <p className="font-thin lg:text-md">Bangalore - 785 956</p>
        </motion.div>
      </div>
      <p className="text-[#100C46] text-xl">&#169; Deep Dash 2022</p>
    </motion.div>
  );
};

export default Footer;
