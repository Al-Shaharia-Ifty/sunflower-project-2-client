import { useQuery } from "@tanstack/react-query";
import React from "react";
import ServiceCart from "../Components/ServiceCart";
import Loading from "../Shared/Loading";

const Services = () => {
  const { data: allPhotos, isLoading } = useQuery({
    queryKey: ["allPhotos"],
    queryFn: () =>
      fetch(`http://localhost:5000/photos`, {
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
  return (
    <div>
      <div className="bg-[#000000] h-[80px]"></div>
      <div className="bg-[#000000] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-10 lg:px-20">
        {allPhotos?.map((p, i) => (
          <div key={i} className="bg-[#17171A] rounded-lg p-5">
            <ServiceCart info={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
