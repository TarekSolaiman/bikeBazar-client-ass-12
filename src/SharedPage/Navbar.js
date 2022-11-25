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
      <li>
        <Link className="font-semibold text-gray-500" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-gray-500" to="/reviow">
          Reviow
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-gray-500" to="/addservices">
          Add Services
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-gray-500" to="/users">
          Users
        </Link>
      </li>

      <li>
        <label
          htmlFor="sitebar"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Sitebar
        </label>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link className="font-semibold text-gray-500" to="/dashbord">
              Dashbord
            </Link>
          </li>
          <li>
            <button
              className="font-semibold text-gray-500"
              onClick={handleLogout}
            >
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="font-semibold text-gray-500" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav className="container py-2.5 w-full mx-auto">
      <div className="flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            className="w-12 h-14 rounded-full mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-bold text-blue-500 whitespace-nowrap">
            BIKE Bazar
          </span>
        </Link>
        <div className="items-center justify-end hidden w-full lg:flex md:w-auto md:order-1">
          <ul className="menu menu-horizontal p-0">{linkList}</ul>
        </div>
        <div className="flex md:order-2 lg:hidden dropdown dropdown-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
              <svg
                className="w-8 h-8"
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
