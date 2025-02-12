import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* barra de navegación  */}
      <nav className="bg-sky-950 text-white shadow-lg mb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo del videoclub */}
            <div className="flex items-center">
              <NavLink to="/" className="text-xl font-bold">
                Videoclub
              </NavLink>
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
