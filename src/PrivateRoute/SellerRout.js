import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useSeller from "../hooks/useSeller";
import Loading from "../SharedPage/Loading";

const SellerRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isSeller, sellerLoading] = useSeller(user?.email);
  if (loading || sellerLoading) {
    return <Loading></Loading>;
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRout;
