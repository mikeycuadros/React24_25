import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // estado para almacenar la información del usuario logueado
  const [user, setUser] = useState(null);
  // verificar si el usuarios esta logueado o hay un token
  const [isLogin, setIsLogin] = useState(false);
  // estoy haciendo el fetching y loading la data??
  const [isLoading, setisLoading] = useState(true);
  // si hay un error
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  // funcion para verificar para si existe token en el localStorage
  const checkAuth = () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        // aqui volvere para decodificar el token y hacer uso
        setUser(JSON.parse());
        setIsLogin(true);
        setisLoading(false);
      }
    } catch (error) {
      console.log("Error al verificar el usuario logueado", error.message);
      setError(error);
    } finally {
      setisLoading(false);
    }
  };

  const value = { user, isLoading, isLogin, error };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
