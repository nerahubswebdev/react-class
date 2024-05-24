import React from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <Outlet />
      <footer>this is the about layout footer</footer>
    </div>
  );
};

export default AboutLayout;
