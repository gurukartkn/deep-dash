import Image from "next/image";

import Team1 from "../public/assets/team1.png";
import Team2 from "../public/assets/team2.png";
import Team3 from "../public/assets/team3.png";
import Team4 from "../public/assets/team4.png";

import Profile from "./Profile";

const Team = () => {
  return (
    <div className="text-center p-10">
      <p className="text-[#6257FE] pb-3 xl:text-md">Meet the staff</p>
      <h1 className="text-[#100C46] font-bold text-3xl pb-5 lg:text-4xl xl:text-5xl">
        Our Team
      </h1>
      <div className="flex flex-wrap gap-2 justify-center">
        <Profile
          img={Team1}
          name="Antonita Smith"
          designation="Content Writer"
        />
        <Profile
          img={Team2}
          name="Choudri Malhotra"
          designation="UI Designer"
        />
        <Profile
          img={Team3}
          name="Sachin Kumar"
          designation="Digital Marketer"
        />
        <Profile
          img={Team4}
          name="Malavika Hegde"
          designation="Lead Developer"
        />
      </div>
    </div>
  );
};

export default Team;
