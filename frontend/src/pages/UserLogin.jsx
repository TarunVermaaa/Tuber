import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ userData , setUserData] = useState({});

  const { user, setUser } = React.useContext(UserDataContext);
  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    const response = await axios.post(import.meta.env.VITE_BASE_URL + "/user/login", userData);

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
          className="w-16 mb-10 "
        />
        <form onSubmit={(e) => SubmitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-white font-semibold  mb-3 rounded py-2 px-4  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New here? 
          <Link to="/signup" className="text-blue-600">
          &nbsp;Create New Account 
          </Link>
        </p>
      </div>

      <div>
        <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold  mb-5 rounded py-2 px-4  w-full text-lg placeholder:text-base">
        Sign in as captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
