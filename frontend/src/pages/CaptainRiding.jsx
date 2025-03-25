import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between  w-screen ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          className="w-16"
          alt=""
        />
        <Link
          to="/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>

      <div
        onClick={() => setFinishRidePanel(true)}
        className="h-1/5 flex relative items-center justify-between p-6 bg-yellow-400"
      >
        <h5 className="p-3 text-center absolute -top-[6%] right-[45%] ">
          <i
            onClick={() => {}}
            className="text-2xl text-gray-800  ri-arrow-up-wide-line"
          ></i>
        </h5>
        <h4 className="text-xl font-semibold"> 4 KM Away</h4>
        <button className=" bg-green-600 text-white font-semibold p-3 px-8 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 translate-y-full  px-3 w-full bg-white py-10"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
