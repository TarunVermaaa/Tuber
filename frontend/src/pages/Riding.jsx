import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-20"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt="Car Uber"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Tarun</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">HR26 EF 3322</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Baleno</p>
          </div>
        </div>

        <div className=" gap-2 flex justify-between flex-col items-center"></div>
        <div className="w-full mt-5">
          <div className="flex items-center  gap-5 p-3 border-b-2 ">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">5/9</h3>
              <p className="text-gray-600 text-sm -mt-1">
                Devilal Colony, Gurgaon
              </p>
            </div>
          </div>

          <div className="flex items-center  gap-5 p-3 ">
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">&#8377;193</h3>
              <p className="text-gray-600 text-sm -mt-1">Cash </p>
            </div>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
