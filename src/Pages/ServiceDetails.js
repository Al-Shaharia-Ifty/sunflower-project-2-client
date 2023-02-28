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
  console.log(photoDetails);
  return (
    <div>
      <div className="bg-[#17171A] h-[80px]"></div>
      <h2>Service Details</h2>
    </div>
  );
};

export default ServiceDetails;
