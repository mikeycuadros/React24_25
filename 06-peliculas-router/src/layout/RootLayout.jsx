import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* barra de navegación  */}
      <nav className="bg-sky-950 text-white shadow-lg mb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo del videoclub */}
            <div className="flex items-center space-x-4">
              <NavLink to="/" className="text-lg font-bold">
                Videoclub
              </NavLink>
              <div className="flex space-x-4 ml-10">
                <NavLink to="/movies" className="hover:text-amber-600">
                  Películas
                </NavLink>
                <NavLink to="/search" className="hover:text-amber-600">
                  Buscar
                </NavLink>
                <NavLink to="/reviews" className="hover:text-amber-600">
                  Reseñas
                </NavLink>
                <NavLink to="/favorites" className="hover:text-amber-600">
                  Favoritos
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="bg-sky-900 text-center text-white mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p>&copy; 2022 Videoclub. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
