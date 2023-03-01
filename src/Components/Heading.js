import React from "react";
import img from "../Assets/header.jgp.jpg";

const Heading = () => {
  return (
    <div>
      <div className="relative">
        <img src={img} className="w-full lg:h-screen" alt="" />
        <p
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="heading-font text-3xl md:text-4xl lg:text-6xl absolute bottom-40 left-10 lg:left-20 text-white"
        >
          My Photography Life
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
          className="absolute text-md md:text-lg lg:text-xl bottom-20 lg:bottom-24 left-10 lg:left-20 text-white"
        >
          <p>The world without photography will be</p>
          <p>meaningless to us if there is no light.</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
