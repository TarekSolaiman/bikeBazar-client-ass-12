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
        <div className="drawer-content mt-5 lg:mx-5">
          <Outlet />
        </div>
        <div className="drawer-side lg:backdrop-filter lg:backdrop-blur-lg lg:bg-opacity-20 lg:bg-blue-300">
          <label htmlFor="sitebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content text-lg font-semibold">
            <li className="bg-[#6969691d] hover:bg-[#fbc663c6] rounded-md mb-3">
              <Link to="/dashbord">Profile</Link>
            </li>
            <li className="bg-[#6969691d] hover:bg-[#fbc663c6] rounded-md mb-3">
              <Link to="/dashbord/booked">Booking List</Link>
            </li>
            <li className="bg-[#6969691d] hover:bg-[#fbc663c6] rounded-md mb-3">
              <Link to="/dashbord/myPayment">My Payment</Link>
            </li>

            {isSeller && (
              <>
                <li className="bg-[#6969691d] hover:bg-[#fbc663c6] rounded-md mb-3">
                  <Link to="/dashbord/myProduct">Product List</Link>
                </li>
                <li className="bg-[#6969691d] hover:bg-[#fbc663c6] rounded-md mb-3">
                  <Link to="/dashbord/myOrders">Orders List</Link>
                </li>
                <li className="bg-[#6969691d] hover:bg-[#fbc663c6] rounded-md mb-3">
                  <Link to="/dashbord/sellerPayment">Buyer Payment</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li className="bg-[#6969691d] hover:bg-[#fbc663c6] rounded-md mb-3">
                  <Link to="/dashbord/buyers">All Buyers</Link>
                </li>
                <li className="bg-[#6969691d] hover:bg-[#fbc663c6] rounded-md mb-3">
                  <Link to="/dashbord/sellers">All Sellers</Link>
                </li>
                <li className="bg-[#6969691d] hover:bg-[#fbc663c6] rounded-md mb-3">
                  <Link to="/dashbord/report">Reported Item</Link>
                </li>
                <li className="bg-[#6969691d] hover:bg-[#fbc663c6] rounded-md mb-3">
                  <Link to="/dashbord/adminPayment">Payment Detail</Link>
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
