import React from "react";
import Heading from "../Components/Heading";
import HomeService from "../Components/HomeService";
import Myself from "../Components/Myself";
import MyTeam from "../Components/MyTeam";
import Partnership from "../Components/Partnership";
import PhotoSection from "../Components/PhotoSection";
import Support from "../Components/Support";
import Tips from "../Components/Tips";

const Home = () => {
  return (
    <div>
      <Heading />
      <Myself />
      <PhotoSection />
      <HomeService />
      <MyTeam />
      <Tips />
      <Support />
      <Partnership />
    </div>
  );
};

export default Home;
