import { createBrowserRouter } from "react-router-dom";
import AdminPayment from "../DashbordPages/AdminPayment/AdminPayment";
import AllBuyer from "../DashbordPages/AllUsersPages/AllBuyer/AllBuyer";
import AllSeller from "../DashbordPages/AllUsersPages/AllSeller/AllSeller";
import ReporedItem from "../DashbordPages/AllUsersPages/Reporteditem/ReporedItem";
import BookingList from "../DashbordPages/BuyerPages/BookingList";
import Mypayment from "../DashbordPages/BuyerPages/Mypayment";
import PaymentPage from "../DashbordPages/BuyerPages/PaymentPage";
import MyOrders from "../DashbordPages/MyOrdersPages/MyOrders";
import MyProducts from "../DashbordPages/MyProductsPages/MyProducts";
import Profile from "../DashbordPages/ProfilePage/Profile";
import SellerPayment from "../DashbordPages/SellerPayment/SellerPayment";
import Dashbord from "../Layout/Dashbord";
import Main from "../Layout/Main";
import Bloge from "../Pages/BlogPages/Bloge";
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
        path: "/blog",
        element: <Bloge />,
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
    element: (
      <PrivateRoute>
        <Dashbord />
      </PrivateRoute>
    ),
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
        path: "/dashbord/booked",
        element: (
          <PrivateRoute>
            <BookingList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashbord/myPayment",
        element: (
          <PrivateRoute>
            <Mypayment />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashbord/payment/:id",
        loader: ({ params }) =>
          fetch(
            `https://bike-bazar-server.vercel.app/booked/payment/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <PaymentPage />
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
        path: "/dashbord/adminPayment",
        element: (
          <AdminRoute>
            <AdminPayment />
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
      {
        path: "/dashbord/myOrders",
        element: (
          <SellerRout>
            <MyOrders />
          </SellerRout>
        ),
      },
      {
        path: "/dashbord/sellerPayment",
        element: (
          <SellerRout>
            <SellerPayment />
          </SellerRout>
        ),
      },
    ],
  },
]);
