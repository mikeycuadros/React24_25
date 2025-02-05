import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// creo el contexto
const AuthContext = createContext();

// creo el provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // hacer login
  // simulo un login, si exite una token en el localStorage con valor true, entonces el usuario esta logueado
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(true));
  };
  // hacer logout
  // simulo un logout, elimino el token en el localStorage y seteo el estado a false
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.remove("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// creo un hook personalizado para exportar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Error en el contexto de Auth");
  }
  return context;
};
