import { createBrowserRouter } from "react-router-dom";
import AllBuyer from "../DashbordPages/AllUsersPages/AllBuyer/AllBuyer";
import AllSeller from "../DashbordPages/AllUsersPages/AllSeller/AllSeller";
import ReporedItem from "../DashbordPages/AllUsersPages/Reporteditem/ReporedItem";
import MyProducts from "../DashbordPages/MyProductsPages/MyProducts";
import Profile from "../DashbordPages/ProfilePage/Profile";
import Dashbord from "../Layout/Dashbord";
import Main from "../Layout/Main";
import CategoryProduct from "../Pages/CategoryPage/CategoryProduct";
import Home from "../Pages/HomePages/Home";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/SignupPage/Signup";
import AdminRoute from "../PrivateRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRout from "../PrivateRoute/SellerRout";
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
        path: "/category/:cat",
        element: <CategoryProduct />,
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
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashbord/buyers",
        element: (
          <AdminRoute>
            <AllBuyer />
          </AdminRoute>
        ),
      },
      {
        path: "/dashbord/sellers",
        element: (
          <AdminRoute>
            <AllSeller />
          </AdminRoute>
        ),
      },
      {
        path: "/dashbord/report",
        element: (
          <AdminRoute>
            <ReporedItem />
          </AdminRoute>
        ),
      },
      {
        path: "/dashbord/myProduct",
        element: (
          <SellerRout>
            <MyProducts />
          </SellerRout>
        ),
      },
    ],
  },
]);
