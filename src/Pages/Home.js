import React from "react";
import Heading from "../Components/Heading";
import HomeService from "../Components/HomeService";
import Myself from "../Components/Myself";

const Home = () => {
  return (
    <div>
      <Heading />
      <Myself />
      <HomeService />
    </div>
  );
};

export default Home;
