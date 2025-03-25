import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = ({ setConfirmRidePopUpPanel }) => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h5 className="p-3 text-center absolute top-7 right-[10%]">
        <i
          onClick={() => {
            setConfirmRidePopUpPanel(false);
          }}
          className="text-2xl text-gray-400  ri-arrow-down-wide-line"
        ></i>
      </h5>
      <h3 className="font-semibold text-2xl mb-5 ">Confirm Ride to Start</h3>

      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskHikb89UpBSOJoSgN1EFMrQCbHiH_l9x3Q&s"
            alt=""
          />

          <h2 className="text-lg font-medium">Sonam Angry</h2>
        </div>

        <h5 className="text-lg font-semibold ">2.2 KM</h5>
      </div>

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

      <div className="mt-6">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            onChange={(e) => setOtp(e.target.value)}
            value={otp}
            type="number"
            placeholder="Enter OTP"
            className="bg-[#eee] font-mono  px-12 py-2 text-lg rounded-lg w-full mt-3"
          />

          <Link
            to="/captain-riding"
            onClick={() => {}}
            className="w-full flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg mt-5"
          >
            Confirm
          </Link>
          <button
            onClick={() => {
              setConfirmRidePopUpPanel(false);
            }}
            className="w-full bg-red-600 text-white font-semibold p-2 rounded-lg mt-4"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
