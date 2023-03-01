import React from "react";
import sup from "../Assets/support.jpg";

const Support = () => {
  return (
    <div>
      <div className="bg-black text-white text-xl p-10 lg:p-20 lg:flex overflow-hidden">
        <div className="w-full lg:w-1/2">
          <h2 className="md:text-5xl text-3xl lg:text-6xl font-bold">
            What Can We Tell You{" "}
            <span className="text-orange-400">About Us</span>
          </h2>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus rounded-box mt-5"
            >
              <div className="collapse-title text-2xl font-medium">
                Actually deep mixtape master cleanse
              </div>
              <div className="collapse-content">
                <p className="text-sm text-orange-300">
                  The world without photography will be meaningless to us if
                  there is no light and color, which opens up our minds and
                  expresses passion.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus duration-300 rounded-box"
            >
              <div className="collapse-title text-2xl font-medium">
                Cornhole vegan locavore retro
              </div>
              <div className="collapse-content">
                <p className="text-sm text-orange-300">
                  The world without photography will be meaningless to us if
                  there is no light and color, which opens up our minds and
                  expresses passion.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus duration-300 rounded-box"
            >
              <div className="collapse-title text-2xl font-medium">
                little dummy text for your mockup
              </div>
              <div className="collapse-content">
                <p className="text-sm text-orange-300">
                  The world without photography will be meaningless to us if
                  there is no light and color, which opens up our minds and
                  expresses passion.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus duration-300 rounded-box"
            >
              <div className="collapse-title text-2xl font-medium">
                organic copper mug brunch single
              </div>
              <div className="collapse-content">
                <p className="text-sm text-orange-300">
                  The world without photography will be meaningless to us if
                  there is no light and color, which opens up our minds and
                  expresses passion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img data-aos="fade-left" src={sup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Support;
