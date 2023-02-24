import React from "react";
import pro from "../Assets/profile.jpg";

const Myself = () => {
  return (
    <div>
      <div className="lg:flex py-20 bg-[#17171A]">
        <div data-aos="zoom-in-right" className="lg:w-1/2 flex justify-center">
          <img
            src={pro}
            className="rounded-full h-96 w-96 object-cover"
            alt=""
          />
        </div>
        <div
          data-aos="zoom-in-left"
          className="lg:w-1/2 text-white lg:pr-40 mx-10 lg:mx-0 flex items-center"
        >
          <div>
            <p className="text-orange-400 text-2xl">About Me</p>
            <div className="mt-5 text-4xl">
              <h2>My Name Is Al Shaharia,</h2>
              <h2>
                I'm a <span className="text-orange-400">Photograph</span>
              </h2>
            </div>
            <p className="mt-10 text-justify">
              The world without photography will be meaningless to us if there
              is no light and color, which opens up our minds and expresses
              passion. My photos are inspired by light, color, creative
              perspective, techniques & personalities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myself;
