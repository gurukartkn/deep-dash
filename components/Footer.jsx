const Footer = () => {
  return (
    <div className="text-center p-10 bg-[#6257FE]">
      <div className="text-white flex flex-wrap gap-10 justify-center md:justify-evenly mb-10">
        <div className="max-w-sm">
          <h3 className="font-bold lg:text-xl">Phone</h3>
          <p className="font-thin lg:text-md">+91 88995 56645</p>
          <p className="font-thin lg:text-md">04288 569 896</p>
        </div>
        <div className="max-w-sm">
          <h3 className="font-bold lg:text-xl">Email</h3>
          <p className="font-thin lg:text-md">admin@deepdive.com</p>
        </div>
        <div className="max-w-sm">
          <h3 className="font-bold lg:text-xl">Address</h3>
          <p className="font-thin lg:text-md">25, 5th Cross Street, </p>
          <p className="font-thin lg:text-md">Bhommana Halli, </p>
          <p className="font-thin lg:text-md">Bangalore - 785 956</p>
        </div>
      </div>
      <p className="text-[#100C46] text-xl">&#169; Deep Dash 2022</p>
    </div>
  );
};

export default Footer;
