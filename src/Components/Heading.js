import React from "react";
import img from "../Assets/header.jgp.jpg";

const Heading = () => {
  return (
    <div>
      <div className="relative">
        <img src={img} className="h-screen w-full" alt="" />
        <p
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="heading-font text-4xl lg:text-6xl absolute bottom-40 left-10 lg:left-20 text-white"
        >
          My Photography Life
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="absolute bottom-20 lg:bottom-24 left-10 lg:left-20 text-white"
        >
          <p>The world without photography will be</p>
          <p>meaningless to us if there is no light.</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
