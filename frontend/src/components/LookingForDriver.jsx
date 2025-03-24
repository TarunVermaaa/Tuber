import React from "react";

const LookingForDriver = ({ setVehicleFound }) => {
  return (
    <div>
      <h5
        className="p-3 text-center absolute top-4 right-[10%] cursor-pointer"
        onClick={() => {
          setVehicleFound(false);
        }} 
      >
        <i className="text-2xl text-gray-400  ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="font-semibold text-2xl mb-5">Looking for a Driver</h3>
      <div className=" gap-2 flex justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="Car Uber"
        />
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
    </div>
  );
};

export default LookingForDriver;
