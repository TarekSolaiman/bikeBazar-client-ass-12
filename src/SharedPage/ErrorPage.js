import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import errimg from "../assets/dribbble_1.gif";
import { AuthContext } from "../context/AuthProvider";

const ErrorPage = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
        localStorage.removeItem("accessToken");
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <div className="text-center">
      <p className="text-2xl text-red-600 font-semibold">Somthing Wrong !!!</p>
      <p className="text-2xl text-red-600 font-semibold">
        {error.statusText || error.message}
      </p>
      <p className="text-2xl text-red-600 font-semibold">Please Log out</p>
      <button onClick={handleLogout} className="btn btn-error">
        LogOut
      </button>
      <img src={errimg} className="w-3/4 mx-auto" alt="" />
    </div>
  );
};

export default ErrorPage;
