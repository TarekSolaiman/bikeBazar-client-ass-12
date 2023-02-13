import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import logo from "../assets/bikeLogo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
        localStorage.removeItem("accessToken");
      })
      .catch((e) => console.log(e.message));
  };

  const linkList = (
    <>
      <li className="my-2 lg:my-0">
        <Link className="btnPrimary flex justify-center" to="/blog">
          Blog
        </Link>
      </li>
      {user?.email ? (
        <>
          <li className="my-2 lg:my-0">
            <Link className="btnPrimary flex justify-center" to="/dashbord">
              Dashbord
            </Link>
          </li>
          <li className="my-2 lg:my-0">
            <button
              className="btnPrimary flex justify-center"
              onClick={handleLogout}
            >
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="my-2 lg:my-0">
            <Link className="btnPrimary flex justify-center" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav className="container mx-auto sticky top-0  z-[9999] py-1">
      <div className="px-4 py-0 lg:py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-80 border shadow border-gray-200 flex flex-wrap items-center justify-between bg-accent">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            className="w-12 h-14 rounded-full mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl lg:text-2xl font-bold text-[#ffbf00] whitespace-nowrap">
            BIKE Bazar
          </span>
        </Link>
        <div className="items-center justify-end hidden w-full lg:flex md:w-auto md:order-1">
          <ul className="menu menu-horizontal p-0">{linkList}</ul>
        </div>
        <div className="flex md:order-2 lg:hidden dropdown dropdown-end items-center">
          {user?.email && (
            <label
              htmlFor="sitebar"
              className="font-semibold rounded-lg ml-8 my-2 lg:my-0 p-1 flex justify-center hover:bg-secondary hover:text-white border-2 border-secondary text-secondary"
            >
              Sitebar
            </label>
          )}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
              <svg
                className="w-8 h-8 text-white"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {linkList}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
