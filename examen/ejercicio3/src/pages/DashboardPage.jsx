import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <>
      <div>Protegido</div>
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </>
  );
};

export default DashboardPage;
