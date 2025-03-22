import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-[url(https://images.unsplash.com/photo-1572239780645-203c467a49b5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen flex justify-between flex-col w-full pt-8 ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
          className="w-16 ml-8"
        />
        <div className="bg-white py-4 px-8 pb-7">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link  to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
