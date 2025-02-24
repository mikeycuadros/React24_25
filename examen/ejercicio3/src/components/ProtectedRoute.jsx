import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  if (!token) {
    navigate("/");
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
