import React from "react";
import { useAuthContext } from "../context/auth-context.jsx";

const About = () => {
  const { userData } = useAuthContext();

  console.log("the validated user data from about page => ", userData);
  return (
    <div>
      <p>About</p>
    </div>
  );
};

export default About;
