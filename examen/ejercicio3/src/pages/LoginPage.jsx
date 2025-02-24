import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { loginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const nombre = e.target.name;
    setFormData({ ...formData, [nombre]: e.target.value.trim() });
  };

  // voy a realizar una peticion a la api con los datos del formulario para verificar si el usuario existe en la base de datos
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData);
      navigate("/products");
    } catch (error) {
      console.log("Error al iniciar sesion", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Iniciar Sesión
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xl font-semibold text-gray-900"
          >
            Correo Electrónico
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 text-lg text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-xl font-semibold text-gray-900"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 text-lg text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
