import React, { useState } from "react";
import axios from "axios";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const res = await axios.post(
      "http://147.93.27.93:8082/api/v1/user/signin",
      { formData }
    );

    if (res.data) {
      navigate("/");
    }
  };

  return (
    <div className="flex  items-center justify-center w-full py-20 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-5 w-full -max-w-5xl justify-center items-start shadow-lg bg-white">
        <div className="bg-blue-500 py-8 px-20 h-150 w-120">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Looks like you're new here!
          </h1>
          <p className="text-lg md:text-2xl text-white py-8">
            Sign up with your mobile number to get started
          </p>
          <img src="bgg.png" alt="signup-img" className="w-70 h-70 mt-15  " />
        </div>
        <div className="flex flex-col justify-center items-center bg-white px-6">
           <div className="relative w-full max-w-xl ">
            <Mail
              size={30}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 mt-5"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full text-gray-700 bg-gray-200 text-xl py-4 pl-12 pr-4 rounded-md focus:outline-none mt-8"
            />
          </div>
          <div className="relative w-full max-w-xl ">
            <Lock
              size={30}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 mt-5"
            />
            <input
              type="password"
              value={formData.password}
              placeholder="Password"
               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full text-gray-700 bg-gray-200 text-xl py-4 pl-12 pr-4 rounded-md focus:outline-none mt-8 "
            />
          </div>
          <button type='submit'
          onClick={handleSubmit}
          className="flex items-center text-lg md:text-xl  justify-center bg-orange-500 text-white  font-bold w-[500px] mt-10 p-4 rounded-sm cursor-pointer ">
            Sign In
          </button>
          
          

         
        </div>
      </div>
    </div>
  );
};

export default Login;
