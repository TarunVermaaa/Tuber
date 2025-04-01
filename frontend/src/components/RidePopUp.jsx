import React from "react";

const RidePopUp = ({ setRidePopUpPanel, setConfirmRidePopupPanel, ride , confirmRide }) => {
  return (
    <div>
      <h5 className="p-3 text-center absolute top-4 right-[10%]">
        <i
          onClick={() => {
            setRidePopUpPanel(false);
          }}
          className="text-2xl text-gray-400  ri-arrow-down-wide-line"
        ></i>
      </h5>
      <h3 className="font-semibold text-2xl mb-5 ">New Ride Available</h3>

      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-300 rounded-lg">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskHikb89UpBSOJoSgN1EFMrQCbHiH_l9x3Q&s"
            alt=""
          />

          <h2 className="text-lg font-medium">
            {ride?.user.fullName.firstname +
              (ride?.user.fullName.lastname ? " " + ride?.user.fullName.lastname:"")}
          </h2>
        </div>

        <h5 className="text-lg font-semibold ">2.2 KM</h5>
      </div>

      <div className="w-full mt-5">
        <div className="flex items-center  gap-5 p-3 border-b-2 ">
          <i className="ri-map-pin-2-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">5/9</h3>
            <p className="text-gray-600 text-sm -mt-1">{ride?.pickup}</p>
          </div>
        </div>

        <div className="flex items-center  gap-5 p-3 border-b-2 ">
          <i className="ri-map-pin-2-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">5/9</h3>
            <p className="text-gray-600 text-sm -mt-1">{ride?.destination}</p>
          </div>
        </div>

        <div className="flex items-center  gap-5 p-3 ">
          <i className="ri-currency-line text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">&#8377;{ride?.fare}</h3>
            <p className="text-gray-600 text-sm -mt-1">Cash </p>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-5 justify-between w-full">
        <button
          onClick={() => {
            setConfirmRidePopupPanel(true);
            confirmRide()

          }}
          className=" bg-green-600 text-white font-semibold p-3 px-8 rounded-lg "
        >
          Accept
        </button>
        <button
          onClick={() => {
            setRidePopUpPanel(false);
          }}
          className=" bg-gray-400 text-gray-700 font-semibold p-3 px-8 rounded-lg "
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
