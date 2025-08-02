import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  try {
    const data = JSON.parse(localStorage.getItem("userDetails"));
    return !!data;
  } catch (error) {
    return false;
  }
};

const isAdmin = () =>{
  const data = JSON.parse(localStorage.getItem("role"));
  if(data === 'admin'){
    return true;
  }else{
    return false;
  }
}

const PublicRoutes = () => {
  return isAuthenticated() ? <Navigate to="/" /> : <Outlet />;
};

const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

const AdminRoutes = () => {
  return isAdmin() ? <Outlet /> : <Navigate to="/" />;
};

export { PublicRoutes, PrivateRoutes, AdminRoutes };
