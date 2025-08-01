import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  return data;
};

const PublicRoutes = () => {
  return isAuthenticated() ? <Navigate to="/" /> : <Outlet />;
};
const PrivateRoutes = () => {
  return !isAuthenticated() ? <Navigate to="/login" /> : <Outlet />;
};

export { PublicRoutes, PrivateRoutes };
