import React from "react";

const ConfirmRide = (props) => {
    // Safe defaults for props
    const {
        pickup = "Location not specified",
        destination = "Destination not specified",
        fare = { default: 0 },
        vehicleType = "default",
        setConfirmRidePanel = () => {},
        setVehicleFound = () => {},
        setVehiclePanelOpen = () => {},
        createRide = () => {}
    } = props;

    return (
        <div>
            {/* Close Button */}
            <h5 className="p-3 text-center absolute top-4 right-[10%]">
                <i
                    onClick={() => setConfirmRidePanel(false)}
                    className="text-2xl text-gray-400 ri-arrow-down-wide-line"
                ></i>
            </h5>

            {/* Header */}
            <h3 className="font-semibold text-2xl mb-5">Confirm your Ride</h3>

            {/* Vehicle Image */}
            <div className="gap-2 flex justify-between flex-col items-center">
                <img
                    className="h-20"
                    src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                    alt="Car Uber"
                />
            </div>

            {/* Ride Details */}
            <div className="w-full mt-5">
                {/* Pickup Location */}
                <div className="flex items-center gap-5 p-3 border-b-2">
                    <i className="ri-map-pin-user-fill text-lg"></i>
                    <div>
                        <h3 className="text-lg font-medium">Pickup Point</h3>
                        <p className="text-gray-600 text-sm -mt-1">{pickup}</p>
                    </div>
                </div>

                {/* Destination */}
                <div className="flex items-center gap-5 p-3 border-b-2">
                    <i className="ri-map-pin-2-fill text-lg"></i>
                    <div>
                        <h3 className="text-lg font-medium">Destination</h3>
                        <p className="text-gray-600 text-sm -mt-1">{destination}</p>
                    </div>
                </div>

                {/* Fare */}
                <div className="flex items-center gap-5 p-3">
                    <i className="ri-currency-line text-lg"></i>
                    <div>
                        <h3 className="text-lg font-medium">
                            ₹{fare[vehicleType] || fare.default || 0}
                        </h3>
                        <p className="text-gray-600 text-sm -mt-1">Payment: Cash</p>
                    </div>
                </div>
            </div>

            {/* Confirm Button */}
            <button
                onClick={() => {
                    setVehicleFound(true);
                    setConfirmRidePanel(false);
                    setVehiclePanelOpen(false);
                    createRide();
                }}
                className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5 hover:bg-green-700 transition-colors"
            >
                Confirm Ride
            </button>
        </div>
    );
};

export default ConfirmRide;