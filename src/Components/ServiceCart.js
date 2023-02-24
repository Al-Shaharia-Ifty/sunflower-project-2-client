import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCart = ({ info }) => {
  const { img, name, rating, details, _id } = info;
  return (
    <div className="flex justify-center">
      <div className="w-96 ">
        <div>
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} className="w-full h-56 rounded-lg" alt="" />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="text-white mt-5 ">
          <h2 className="text-xl font-semibold">
            Photograhpy Name{" "}
            <span className="text-orange-400 font-normal">{name}</span>
          </h2>
          <p>
            Rating : <span className="text-orange-400">{rating} star</span>
          </p>
          <p>
            Details :{" "}
            <span className="text-orange-400">
              {details.length > 100 ? details.slice(0, 100) : details}...
            </span>
          </p>
          <Link
            to={`/service-details/${_id}`}
            className="flex justify-end mt-5"
          >
            <button className="btn bg-orange-500 hover:text-orange-400">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
