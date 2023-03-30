import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import CommentSection from "../Components/CommentSection";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  const {
    data: photoDetails,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["photoDetails"],
    queryFn: () =>
      fetch(`https://novo-server.vercel.app/photo-details/${params.id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading || loading) {
    return <Loading />;
  }

  const { _id, name, details, img, rating } = photoDetails;
  console.log(_id);

  const onSubmit = (data) => {
    setLoading(true);
    const comment = data.comment;
    const userInfo = {
      serviceName: name,
      comments: comment,
      name: user?.displayName,
      email: user?.email,
      img: user?.photoURL || "https://i.ibb.co/mycK5xq/young-man.png",
    };
    reset();
    if (!user) {
      setLoading(false);
      Swal.fire("Sorry", "Please Login first", "error");
      return;
    } else {
      fetch("https://novo-server.vercel.app/photo-comment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          Swal.fire("Your Comment is done", "", "success");
          refetch();
        });
    }
  };

  return (
    <div>
      <div className="lg:flex w-full bg-black overflow-hidden min-h-screen">
        {/* photo img */}
        <div className="lg:w-3/5 w-full flex items-center">
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
      <CommentSection serviceName={name} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black flex justify-center py-5"
      >
        <input
          type="text"
          placeholder="Type here"
          className="input w-full max-w-xs mr-3"
          {...register("comment", {
            required: {
              value: true,
            },
          })}
        />
        <button className="btn hover:bg-orange-500 hover:text-white text-orange-400">
          Add a comment
        </button>
      </form>
    </div>
  );
};

export default ServiceDetails;
