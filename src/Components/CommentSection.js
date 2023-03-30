import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Loading from "../Shared/Loading";

const CommentSection = ({ serviceName }) => {
  const {
    data: photoComments,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["photoComments"],
    queryFn: () =>
      fetch(`https://novo-server.vercel.app/photo-comment/${serviceName}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  useEffect(() => {
    if (serviceName) {
      refetch();
    }
  }, [refetch, serviceName]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="bg-black text-white pt-20 lg:px-20 px-10">
        <h2 data-aos="fade-in" className="text-2xl md:text-3xl text-center">
          <span className="text-orange-400">Comments</span> About this Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 lg:mx-20 mt-10 gap-5">
          {photoComments
            .slice()
            .reverse()
            .map((c, i) => (
              <div data-aos="fade-up" className="bg-[#313641] p-3 rounded-2xl">
                <div className="flex overflow-hidden">
                  <img
                    data-aos="fade-right"
                    data-aos-delay="300"
                    src={c.img}
                    className="w-14 rounded-full"
                    alt=""
                  />
                  <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="ml-3"
                  >
                    <h3 className="text-xl">{c.name}</h3>
                    <p>{c.email}</p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <p
                    data-aos="fade-down"
                    data-aos-delay="500"
                    className="text-sm mt-5 text-justify text-orange-200"
                  >
                    {c.comments}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
