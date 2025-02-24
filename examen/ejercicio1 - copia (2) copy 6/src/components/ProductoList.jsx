import { useProducts } from "../context/ProductContext";

const ProductoList = () => {
  const { products, error, isLoading } = useProducts();

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
