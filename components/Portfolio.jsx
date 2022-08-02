import Image from "next/image";

import Portfolio1 from "../public/assets/portfolio1.png";
import Portfolio2 from "../public/assets/portfolio2.png";
import Portfolio3 from "../public/assets/portfolio3.png";
import Portfolio4 from "../public/assets/portfolio4.png";

const Portfolio = () => {
  return (
    <div className="text-center p-10">
      <p className="text-[#6257FE] pb-3 xl:text-md">Our works</p>
      <h1 className="text-[#100C46] font-bold text-3xl pb-5 lg:text-4xl xl:text-5xl">
        Portfolio
      </h1>
      <div className="flex flex-wrap gap-2 justify-center">
        <Image src={Portfolio1} alt="portfolio1" />
        <Image src={Portfolio2} alt="portfolio2" />
        <Image src={Portfolio3} alt="portfolio3" />
        <Image src={Portfolio4} alt="portfolio4" />
      </div>
    </div>
  );
};

export default Portfolio;
