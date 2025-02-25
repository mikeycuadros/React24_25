import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useProducts } from "../context/ProductContext";

const DashboardPage = () => {
  const { products, loading, error } = useProducts();
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const [search, setSearch] = useState();

  const handleLogout = () => {
    // Implementar lógica de cerrar sesión
    logOut();
    navigate("/");
  };

  useEffect(() => {
    search != "" ?
     setFilteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase().trim()) : setFilteredProducts(products)
    );
  }, [products, search]);

  if (error) {
    return <div>Error haciendo fetching</div>;
  }

  return (
    <>
      <div>DashboardPage PROTEGIDO</div>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <div className="mb-8 flex flex-wrap gap-4">
        <form action="" className="border-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-rose-500"
              placeholder="Introduce el nombre del Pokémon"
            />
          </div>
        </form>
      </div>

      <div>
        <h1>Product List</h1>
        {loading ? (
          <p>Cargando los datos</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product._id}>{product.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
