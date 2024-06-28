import React, { useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useAuthContext } from "../context/auth-context";
import { baseauth } from "../constants";
import axios from "axios";

const Header = () => {
  const NavigationArray = [
    {
      id: 1,
      link: "/",
      label: "Home",
    },
    {
      id: 2,
      link: "/about",
      label: "About",
    },
    {
      id: 3,
      link: "/blog",
      label: "Blog",
    },
    {
      id: 4,
      link: "/profile",
      label: "Profile",
    },
    {
      id: 5,
      link: "/contact",
      label: "Contact",
    },
  ];

  console.log("the base auth => ", baseauth);

  const pathname2 = useLocation();
  const { userData } = useAuthContext();

  console.log("the user data => ", userData);

  // state for mobile header
  const [openHeader, setOpenHeader] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const logout = () => {
    setIsLoggingOut(true);
    axios
      .get(`${baseauth}/user/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("the logout response => ", res);
        // window.location.assign("/");
      })
      .catch((error) => {
        console.log("the login error => ", error);
        if (error instanceof axios.AxiosError) {
          console.log(
            "the register error from axios => ",
            error?.response?.data
          );
        }
      })
      .finally(() => setIsLoggingOut(false));
  };

  return (
    <div className="flex items-center space-x-2 justify-between p-3">
      <div>Logo</div>

      {userData?.id ? (
        <div>
          {/* desktop view */}
          <nav className="lg:flex items-center space-x-3 hidden">
            {NavigationArray?.map((navigation) => (
              <Link
                key={navigation.id}
                to={`${navigation.link}`}
                className={`${
                  pathname2?.pathname === navigation?.link ? "text-red-600" : ""
                }`}
              >
                {navigation.label}
              </Link>
            ))}

            <button
              onClick={logout}
              disabled={isLoggingOut}
              className="bg-red-300 px-3 py-1 rounded-md disabled:opacity-25"
            >
              Logout
            </button>

            {/* {NavigationArray?.map((navigation) => (
            <NavLink
              key={navigation.label}
              to={`${navigation.link}`}
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              {navigation.label}
            </NavLink>
          ))} */}

            {/* see the difference  */}
            {/* <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            About
          </NavLink> */}
            {/* <Link to="/about">About</Link> */}
            {/* <Link to="/blog">Blog</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact</Link> */}
          </nav>

          {/* mobile view */}
          <nav className="lg:hidden">
            <MdMenu
              className="text-red-600 w-10 h-10 cursor-pointer"
              onClick={() => setOpenHeader(true)}
            />
            {openHeader && (
              <div className="absolute w-full inset-0 bg-black/70 z-50">
                <div className="bg-white">
                  <div className="flex items-center justify-between px-5">
                    <h4>Mobile Header</h4>
                    <IoCloseCircleOutline
                      className="w-10 h-10 text-orange-400 cursor-pointer"
                      onClick={() => setOpenHeader(false)}
                    />
                  </div>

                  <div className="flex flex-col space-y-3 px-3 py-2">
                    {NavigationArray?.map((navigation) => (
                      <Link
                        key={navigation.id}
                        to={`${navigation.link}`}
                        className={`${
                          pathname2?.pathname === navigation?.link
                            ? "text-red-600"
                            : ""
                        }`}
                        onClick={() => setOpenHeader(false)}
                      >
                        {navigation.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      ) : (
        <div className="flex space-x-3 p-1">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
