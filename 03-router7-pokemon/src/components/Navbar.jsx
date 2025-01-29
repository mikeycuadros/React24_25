import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/paths";

const Navbar = () => {
  /**
   * NavLink se utiliza para movernos entre rutas
   * NavLink añade "active" a className cuando la ruta es la actual (V7 de router dom)
   * isActive --> es una prop de react-router-dom que me dice si ña ruta esta activa
   */
  return (
    <nav className="bg-gradient-to-tr from-rose-500 to-pink-500 shadow-lg">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="space-x-4">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) =>
              `text-white hover:text-red-600 ${isActive ? "font-bold" : ""}`
            }
          >
            Inicio App
          </NavLink>
          <NavLink to={ROUTES.SEARCH} className="text-white text-2xl font-bold">
            Buscar
          </NavLink>
          <NavLink
            to={ROUTES.FAVORITES}
            className="text-white text-2xl font-bold"
          >
            Favoritos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
