import React, { useState } from "react";
import axios from "axios";
import { baseauth } from "../constants";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginin, setIsLoginin] = useState(false);
  const [errormsg, setErrormsg] = useState("");

  //axios with credentials
  axios.defaults.withCredentials = true;

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoginin(true);
    axios
      .post(`${baseauth}/user/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log("the register response => ", res);
        setEmail("");
        setPassword("");
        window.location.assign("/");
        // navigate("/");
      })
      .catch((error) => {
        console.log("the login error => ", error);
        if (error instanceof axios.AxiosError) {
          console.log(
            "the register error from axios => ",
            error?.response?.data
          );
          setErrormsg(error?.response?.data?.message);
        }
      })
      .finally(() => setIsLoginin(false));
  };

  return (
    <div className="max-w-2xl mx-auto py-20">
      <div className=" bg-white drop-shadow-md p-5 w-full">
        <h1 className="text-center font-semibold">Login Form</h1>
        <form onSubmit={handleLogin} className="space-y-3">
          {/* email part */}
          <div className="flex flex-col space-y-1">
            <label>Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>

          {/* the password */}
          <div className="flex flex-col space-y-1">
            <label>Password</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>

          <div className="text-sm font-light text-red-600">{errormsg}</div>
          <button
            type="submit"
            disabled={isLoginin}
            className="bg-gray-300 px-5 py-1 rounded-md font-medium hover:bg-gray-600 transition duration-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
