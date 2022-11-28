import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Footer from "../SharedPage/Footer";
import Navbar from "../SharedPage/Navbar";

const Dashbord = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isSeller] = useSeller(user.email);
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
              <Link to="/dashbord">Profile</Link>
            </li>
            <li>
              <Link to="/dashbord/booked">Booking List</Link>
            </li>
            <li>
              <Link to="/dashbord">Wish List</Link>
            </li>
            {isSeller && (
              <>
                <li>
                  <Link to="/dashbord/myProduct">Product List</Link>
                </li>
                <li>
                  <Link to="/dashbord/myOrders">Orders List</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashbord/buyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashbord/sellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashbord/report">Reported Item</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashbord;
