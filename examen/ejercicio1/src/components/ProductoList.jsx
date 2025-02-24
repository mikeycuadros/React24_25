import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
const ProductoList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const respose = await fetch(`${API_URL}/api/products`);
      if (!respose.ok) {
        throw new Error("Error fetching product");
      }
      const data = await respose.json();
      setProducts(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Lista de productos</h1>
      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductoList;
