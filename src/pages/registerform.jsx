import React, { useState } from "react";

const Registerform = () => {
  // creating the states for the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   handle registraion fxn

  const handleRegisteration = () => {
    const regDetails = {
      name,
      email,
      bio,
      password,
      confirmPassword,
    };
    console.log("the reg detrails => ", regDetails);
  };

  return (
    <div className="max-w-2xl mx-auto py-20">
      <div className=" bg-white drop-shadow-md p-5 w-full">
        <h1 className="text-center font-semibold">Register Form</h1>
        <form onSubmit={handleRegisteration} className="space-y-3">
          {/* the name field part */}
          <div className="flex flex-col space-y-1">
            <label>Name</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>

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

          {/* the bio part */}
          <div className="flex flex-col space-y-1">
            <label>Bio</label>
            <input
              type="text"
              value={bio}
              required
              onChange={(e) => setBio(e.target.value)}
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

          {/* confirm password */}
          <div className="flex flex-col space-y-1">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-300 px-5 py-1 rounded-md font-medium hover:bg-gray-600 transition duration-200 hover:text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registerform;
