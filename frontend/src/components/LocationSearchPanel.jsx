import React from "react";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanelOpen }) => {
  const locations = [
    "24B, Near Apollo Hospital, Gurgaon, Haryana",
    "33B, Near Fortis Hospital, Gurgaon, Haryana",
    "94B, Near Aryan Hospital, Gurgaon, Haryana",
    "2B, Near Medanta Hospital, Gurgaon, Haryana",
  ];

  return (
    <div>
      {locations.map(function (location , index) {
        return (
          <div
          key={index}
            onClick={() => {
              setPanelOpen(false);
              setVehiclePanelOpen(true);
            }}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl  justify-start items-center my-2"
          >
            <h2 className="bg-[#eee] flex items-center justify-center h-10 w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
