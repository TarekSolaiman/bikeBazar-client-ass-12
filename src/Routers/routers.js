import { createBrowserRouter } from "react-router-dom";
import MyProducts from "../DashbordPages/MyProductsPages/MyProducts";
import Dashbord from "../Layout/Dashbord";
import Main from "../Layout/Main";
import Home from "../Pages/HomePages/Home";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/SignupPage/Signup";
import ErrorPage from "../SharedPage/ErrorPage";

export const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashbord",
    element: <Dashbord />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashbord",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
