import React, { useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

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

  const pathname = useParams();
  const pathname2 = useLocation();

  console.log(" the pathname from params => ", pathname);
  console.log(" the pathname from params again => ", pathname2.pathname);

  // state for mobile header
  const [openHeader, setOpenHeader] = useState(false);

  return (
    <div className="flex items-center space-x-2 justify-between p-3">
      <div>Logo</div>
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
    </div>
  );
};

export default Header;
