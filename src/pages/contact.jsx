import React, { useState } from "react";

const Contact = () => {
  // states for the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  // state for toggle
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => {
    setShowPassword((current) => !current);
  };

  const formdetails = {
    name,
    email,
    password,
    phoneNumber: phone,
    gender,
  };

  const handleSubmit = () => {
    console.log("the form details are => ", formdetails);
  };

  return (
    <div>
      <p>Contact</p>
      {/* build a form here */}
      {/* first way */}

      <div className="max-w-2xl mx-auto">
        <div className="p-3 space-y-2 flex flex-col">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
        </div>

        <div className="p-3 space-y-2 flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
        </div>
        <div className="p-3 space-y-2 flex flex-col">
          <label htmlFor="">Phone number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
        </div>
        <div className="p-3 space-y-2 flex flex-col relative">
          <label htmlFor="">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your passwod"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
          <div
            onClick={toggle}
            className={`absolute top-14 right-10 w-3 h-3 rounded-full ${
              showPassword ? "bg-red-600" : "bg-blue-600"
            }`}
          />
        </div>
        <div className="p-3 space-y-2 flex flex-col">
          <label htmlFor="">Gender</label>
          <input
            type="text"
            placeholder="Enter your gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-400 w-fit px-4 py-1 text-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
