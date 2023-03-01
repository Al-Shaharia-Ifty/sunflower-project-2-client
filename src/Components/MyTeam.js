import React from "react";
import m1 from "../Assets/member-0.jpg";
import m2 from "../Assets/member-1.jpg";
import m3 from "../Assets/member-2.jpg";
import m4 from "../Assets/member-4.jpg";

const MyTeam = () => {
  return (
    <div>
      <div className="bg-[#121212] text-white overflow-hidden">
        <h2 className="text-3xl md:text-4xl lg:text-5xl p-10 text-center">
          My Team <span className="text-orange-400">Member</span>
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-10 lg:mx-20 pb-20">
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1300"
          >
            <img
              className="rounded-full opacity-75 hover:opacity-100 duration-100"
              src={m4}
              alt=""
            />
            <h3 className="text-center mt-5 text-lg font-semibold">
              Pradip Sekhar
            </h3>
            <p className="text-center text-sm opacity-75">
              Photographer & (CEO)
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1400"
          >
            <img
              className="rounded-full opacity-75 hover:opacity-100 duration-100"
              src={m1}
              alt=""
            />
            <h3 className="text-center mt-5 text-lg font-semibold">
              Micky Whitaker
            </h3>
            <p className="text-center text-sm opacity-75">Photographer</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1500"
          >
            <img
              className="rounded-full opacity-75 hover:opacity-100 duration-100"
              src={m2}
              alt=""
            />
            <h3 className="text-center mt-5 text-lg font-semibold">
              Isaac Lindon
            </h3>
            <p className="text-center text-sm opacity-75">Photographer</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1600"
          >
            <img
              className="rounded-full opacity-75 hover:opacity-100 duration-100"
              src={m3}
              alt=""
            />
            <h3 className="text-center mt-5 text-lg font-semibold">
              Westley Ernest
            </h3>
            <p className="text-center text-sm opacity-75">Photographer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
