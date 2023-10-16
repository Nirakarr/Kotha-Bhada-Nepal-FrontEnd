import { Navigate, Outlet } from "react-router-dom";
import AdminDashBoard from "../AdminDashBoard/AdminDashBoard";
import NavBar1 from "../NavBar1";
export const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem("accessToken");
  return isAuthenticated || token ? (
    <>
      <AdminDashBoard />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/admin" />
  );
};
export const PrivateRouteUser = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem("accessToken");
  return isAuthenticated || token ? (
    <>
      <NavBar1 />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/userLogin" />
  );
};
