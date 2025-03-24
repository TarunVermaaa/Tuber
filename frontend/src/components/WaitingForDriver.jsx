import React from "react";

const WaitingForDriver = ({waitingForDriver}) => {
  return (
    <div>
      <h5
        onClick={() => {
          waitingForDriver(false);
        }}
        className="p-3 text-center absolute top-1 right-[40%]"
      >
        <i className="text-3xl text-gray-400  ri-arrow-down-wide-line"></i>
      </h5>

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

export default WaitingForDriver;
