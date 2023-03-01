import React from "react";
import Heading from "../Components/Heading";
import HomeService from "../Components/HomeService";
import Myself from "../Components/Myself";
import MyTeam from "../Components/MyTeam";
import Partnership from "../Components/Partnership";
import PhotoSection from "../Components/PhotoSection";

const Home = () => {
  return (
    <div>
      <Heading />
      <Myself />
      <PhotoSection />
      <HomeService />
      <MyTeam />
      <Partnership />
    </div>
  );
};

export default Home;
