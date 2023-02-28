import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const ServiceDetails = () => {
  const params = useParams();
  const { data: photoDetails, isLoading } = useQuery({
    queryKey: ["photoDetails"],
    queryFn: () =>
      fetch(`http://localhost:5000/photo-details/${params.id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />;
  }

  const { _id, name, details, img, rating } = photoDetails;
  console.log(_id);
  return (
    <div>
      <div className="bg-[#17171A] h-[80px]"></div>
      <div className="lg:flex w-full bg-black">
        {/* photo img */}
        <div className="lg:w-3/5 w-full">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="w-full"
            src={img}
            alt=""
          />
        </div>
        {/* photo details */}
        <div className="lg:w-2/5 w-full text-xl p-5 lg:p-10 text-white flex items-center">
          <div>
            <h2
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="text-2xl lg:text-3xl"
            >
              Photo Name: <spna className="text-orange-400">{name}</spna>
            </h2>
            <h2
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="mt-5 mb-2"
            >
              Photo Details:{" "}
              <spna className="text-orange-400 text-justify">{details}</spna>
            </h2>
            <h2
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Photo Rating: <spna className="text-orange-400">{rating} </spna>
              star
            </h2>
          </div>
        </div>
      </div>
      {/* comment section */}
      <div>
        <h2 className="text-2xl">Comments</h2>
      </div>
    </div>
  );
};

export default ServiceDetails;
