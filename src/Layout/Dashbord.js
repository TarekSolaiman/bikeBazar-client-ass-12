import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../SharedPage/Footer";
import Navbar from "../SharedPage/Navbar";

const Dashbord = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile container mx-auto">
        <input id="sitebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-5">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="sitebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashbord">My Product</Link>
            </li>
            <li>
              <Link to="/dashbord">My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashbord;
