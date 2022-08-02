import Image from "next/image";

import ManImage from "../public/assets/man1.png";
import PhoneImage from "../public/assets/phone.png";

import {
  AiFillSound,
  AiOutlineLayout,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

const Services = () => {
  return (
    <div className="lg:flex">
      <div className="p-10 lg:w-2/3 xl:p-32">
        <p className="text-[#6257FE] pb-3 xl:text-md">What we do</p>
        <h3 className="text-[#100C46] font-bold text-3xl pb-5 lg:text-4xl xl:text-5xl">
          Our Services
        </h3>
        <div className="flex flex-wrap gap-7">
          <div className="md:max-w-[300px] lg:max-w-[250px]">
            <h4 className="text-[#100C46] font-bold xl:text-lg">
              <AiFillSound />
              Online Marketing
            </h4>
            <p className="text-[#100C46] xl:text-md">
              The internet has transformed business marketing. It is the heart
              of our company.
            </p>
          </div>
          <div className="md:max-w-[300px] lg:max-w-[250px]">
            <h4 className="text-[#100C46] font-bold xl:text-lg">
              <AiOutlineLayout />
              Web Development
            </h4>
            <p className="text-[#100C46] xl:text-md">
              Web development is the work involved in developing a Web site for
              the Internet.
            </p>
          </div>
          <div className="md:max-w-[300px] lg:max-w-[250px]">
            <h4 className="text-[#100C46] font-bold xl:text-lg">
              <AiOutlineHeart />
              Website Design
            </h4>
            <p className="text-[#100C46] xl:text-md">
              Web design refers to the design of websites that are displayed on
              the internet.
            </p>
          </div>
          <div className="md:max-w-[300px] lg:max-w-[250px]">
            <h4 className="text-[#100C46] font-bold xl:text-lg">
              <AiOutlineSearch />
              SEO Optimization
            </h4>
            <p className="text-[#100C46] xl:text-md">
              SEO is the process of improving the quality and quantity of
              website traffic to a website.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/3  xl:w-1/2 xl:mt-16">
        <Image
          src={PhoneImage}
          alt="phone-image"
          placeholder="blur"
          loading="lazy"
        ></Image>
      </div>
    </div>
  );
};

export default Services;
