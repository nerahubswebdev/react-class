import React from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";

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

  return (
    <div className="flex items-center space-x-2 justify-between p-3">
      <div>Logo</div>
      <div>
        <nav className="flex items-center space-x-3">
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
      </div>
    </div>
  );
};

export default Header;
