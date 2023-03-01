import React from "react";
import w1 from "../Assets/bottom-logo-w1.png";
import w2 from "../Assets/bottom-logo-w2.png";
import w3 from "../Assets/bottom-logo-w3.png";
import w4 from "../Assets/bottom-logo-w4.png";
import w5 from "../Assets/bottom-logo-w5.png";

const Partnership = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <h2 className="text-3xl md:text-4xl lg:text-4xl p-10 text-center">
          We are <span className="text-orange-400">Partnership</span> with this
          Company.
        </h2>
        <div className="flex flex-wrap justify-center pb-20 gap-14 pt-10">
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1300"
            src={w1}
            alt=""
          />
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1400"
            src={w2}
            alt=""
          />
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1500"
            src={w3}
            alt=""
          />
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1600"
            src={w4}
            alt=""
          />
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1500"
            src={w5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
