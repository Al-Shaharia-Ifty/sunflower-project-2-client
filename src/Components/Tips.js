import React from "react";
import cam1 from "../Assets/cam-1.jpeg";
import cam2 from "../Assets/cam-2.jpg";

const Tips = () => {
  return (
    <div>
      <div className="bg-[#121212] text-xl lg:flex overflow-hidden">
        <div className="w-full lg:w-2/5">
          <div className="relative h-[500px] p-5">
            <img
              //   data-aos="fade-left"
              className="absolute top-5 w-[400px] rounded-tr-3xl rounded-bl-3xl border-2 hover:scale-110 duration-300"
              src={cam2}
              alt=""
            />
            <img
              //   data-aos="fade-right"
              className="absolute bottom-5 right-0 w-[400px] rounded-tl-3xl rounded-br-3xl border-2 hover:scale-110 duration-300"
              src={cam1}
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-3/5 p-10 text-white">
          <h2 className="text-2xl lg:text-4xl">
            Tips for <span className="text-orange-400">New Photographer</span>
          </h2>
          <p className="mt-5 text-justify">
            Invest in Quality Gear: Investing in quality camera gear is a must
            for any new photographer. Quality gear will help you take better
            photos and give you more control over the results. Learn Your
            Camera: Before you start shooting, learn the basics of how your
            camera works. Read the manual, practice with the camera settings,
            and get to know the different functions. Take Your Time: Don't rush
            when you're shooting. Take your time to frame the shot, check the
            exposure settings, and adjust the composition. Shoot in RAW:
            Shooting in RAW mode will give you more control over the editing
            process and allow you to make corrections that may not be possible
            with a JPEG file.
          </p>
          <p className="mt-5">
            Have Fun: Above all else, make sure to have fun with photography.
            Don't take it too seriously and don't be afraid to make mistakes.
            The more you shoot, the better you'll get.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
