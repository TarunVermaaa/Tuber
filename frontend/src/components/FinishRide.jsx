import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FinishRide = (props) => {
    // Safe defaults for props
    const {
        ride = {
            user: { fullname: { firstname: "Customer", lastname: "" } },
            pickup: "Location not specified",
            destination: "Destination not specified",
            fare: 0
        },
        setFinishRidePanel = () => {}
    } = props;

    const navigate = useNavigate()

    async function endRide() {
        if (!ride?._id) return; // Safety check
        
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/rides/end-ride`,
                { rideId: ride._id },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )

            if (response.status === 200) {
                navigate('/captain-home')
            }
        } catch (error) {
            console.error("Error ending ride:", error)
        }
    }

    return (
        <div className="relative">
            {/* Close Button */}
            <h5 
                className='p-1 text-center w-[93%] absolute top-0 cursor-pointer' 
                onClick={() => setFinishRidePanel(false)}
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>

            {/* Header */}
            <h3 className='text-2xl font-semibold mb-5 pt-6'>Finish this Ride</h3>

            {/* Customer Info */}
            <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img 
                        className='h-12 w-12 rounded-full object-cover' 
                        src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" 
                        alt="Customer" 
                    />
                    <h2 className='text-lg font-medium'>
                        {ride?.user?.fullname?.firstname || "Customer"}
                    </h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            {/* Ride Details */}
            <div className='w-full mt-5 space-y-2'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="ri-map-pin-user-fill text-gray-600"></i>
                    <div>
                        <h3 className='text-lg font-medium'>Pickup</h3>
                        <p className='text-sm text-gray-600'>{ride?.pickup}</p>
                    </div>
                </div>
                
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="ri-map-pin-2-fill text-gray-600"></i>
                    <div>
                        <h3 className='text-lg font-medium'>Destination</h3>
                        <p className='text-sm text-gray-600'>{ride?.destination}</p>
                    </div>
                </div>
                
                <div className='flex items-center gap-5 p-3'>
                    <i className="ri-currency-line text-gray-600"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹{ride?.fare || 0}</h3>
                        <p className='text-sm text-gray-600'>Payment: Cash</p>
                    </div>
                </div>
            </div>

            {/* Finish Button */}
            <button
                onClick={endRide}
                className='w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-lg transition-colors'
            >
                Finish Ride
            </button>
        </div>
    )
}

export default FinishRide