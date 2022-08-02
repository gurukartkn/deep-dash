import Image from "next/image";

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import Branding from "../public/assets/branding.png";

const Header = () => {
  return (
    <div className="flex justify-between sticky top-0 z-10 bg-[#6257FE] xl:bg-transparent">
      <div className="bg-[#6257FE] p-3 w-32">
        <Image
          src={Branding}
          alt="brand-logo"
          className="cursor-pointer"
        ></Image>
      </div>
      <div className="bg-[#6257FE] p-3 flex w-52 justify-around items-center">
        <FaTwitter className="text-white h-6 w-6 cursor-pointer" />
        <FaFacebook className="text-white h-6 w-6 cursor-pointer" />
        <FaInstagram className="text-white h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
