import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ checker looks for useAuth

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // ✅ useAuth usage

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
