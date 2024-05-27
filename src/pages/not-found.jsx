import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Not found</p>
      <Link
        to="/"
        className="text-orange-500 mt-5 hover:text-blue-300 transition duration-200"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
