import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    // lo mando a la pagina de login
    return <Navigate to="/" replace={true} />;
  }
  // si puedes pasar
  return children;
};

export default ProtectedRoute;
