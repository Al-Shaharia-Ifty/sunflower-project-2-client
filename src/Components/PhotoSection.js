import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../Data/photos";

const PhotoSection = () => {
  return (
    <div>
      <div className=" bg-slate-900">
        <div
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="p-10 lg:p-20"
        >
          <h2 className="text-2xl lg:text-4xl mb-4 text-white">
            Some of My <span className="text-orange-400">Photos</span>
          </h2>
          <Gallery photos={photos} direction={"column"} />
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;
