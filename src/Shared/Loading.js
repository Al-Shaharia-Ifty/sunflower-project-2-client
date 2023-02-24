import React from "react";
import loadImg from "../Assets/loading.gif";

const Loading = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center relative z-50">
        <img className="w-56" src={loadImg} alt="" />
      </div>
    </div>
  );
};

export default Loading;
