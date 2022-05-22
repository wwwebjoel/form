import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PublicOnlyRoute = ({ component: Component }) => {
  const location = useLocation();

  const token = localStorage.getItem("token");
  if (!token)
    return <Navigate to="/login" replace state={{ from: location }} />;

  if (token) return Component;
};

export default PublicOnlyRoute;
