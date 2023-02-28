import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import ServiceCart from "./ServiceCart";

const HomeService = () => {
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
    <div className="bg-[#000000]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20 px-10 lg:px-20 2xl:px-60">
        {allPhotos.slice(-3).map((p, i) => (
          <div key={i} className="bg-[#17171A] rounded-lg p-5">
            <ServiceCart info={p} />
          </div>
        ))}
      </div>
      <Link to="/photos" className="flex justify-center py-10">
        <button className="btn bg-[#17171A]">See All Photos</button>
      </Link>
    </div>
  );
};

export default HomeService;
