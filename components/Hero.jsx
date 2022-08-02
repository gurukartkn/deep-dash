import Image from "next/image";
import Link from "next/link";

import HeroImage from "../public/assets/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-[#6257FE] text-white xl:mt-[-70px] xl:max-h-min">
      <div className="lg:flex">
        <div className="py-32 lg:w-1/3 lg:py-7 lg:px-4 xl:py-20 xl:px-28 xl:w-1/2">
          <div className="flex flex-col gap-3 md:gap-5 text-center items-center  p-5 md:p-4 lg:text-left lg:items-start">
            <p className="text-md md:text-lg ">We are Creative</p>
            <h2 className="text-5xl md:text-6xl font-bold ">Digital Agency</h2>
            <p className="text-lg md:text-lg ">
              We pride ourselves in delivering world class outputs to all our
              customers.
            </p>
            <div className="bg-white text-black font-bold p-4 rounded-sm shadow-2xl text-center md:w-36 md:mt-5 ">
              <Link href="#">Get Started</Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/3 xl:w-1/2">
          <Image
            src={HeroImage}
            alt="hero-image"
            placeholder="blur"
            loading="lazy"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
