import React from "react";
import Heading from "../Components/Heading";
import HomeService from "../Components/HomeService";
import Myself from "../Components/Myself";
import MyTeam from "../Components/MyTeam";
import PhotoSection from "../Components/PhotoSection";

const Home = () => {
  return (
    <div>
      <Heading />
      <Myself />
      <PhotoSection />
      <HomeService />
      <MyTeam />
    </div>
  );
};

export default Home;
