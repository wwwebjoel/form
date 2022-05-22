import React from "react";
import { Navigate } from "react-router-dom";

const PublicOnlyRoute = ({ component: Component }) => {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/" />;

  if (!token) return Component;
};

export default PublicOnlyRoute;
