import Image from "next/image";

const Profile = ({ img, name, designation }) => {
  return (
    <div>
      <Image src={img} alt="team1" />
      <div className="bg-[#6257FE] mt-[-7px] text-white p-3">
        <p className="font-medium">{name}</p>
        <p className="font-thin">{designation}</p>
      </div>
    </div>
  );
};

export default Profile;
