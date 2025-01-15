import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LiProductCart from "./LiProductCart";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalCarito, setTotalCart] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5173/src/data/db.json");
      if (!response.ok) {
        throw new Error("Error en la peticion");
      }
      setProducts(await response.json());
      console.log(products);
    } catch (error) {
      console.log("Error fetching", error);
    }
  };

  const addCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    // setTotalCart((prevCart) => totalCart(prevCart));
    // setTotalCart((prevTotal) => prevTotal + product.precio);
  };

  const removeCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  const totalCart = (cart) => {
    return cart.reduce((acc, product) => acc + product.precio, 0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Lista de libros
      </h1>
      {/* Div que pinta las productCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addCart={addCart} />
        ))}
      </div>
      {/* Div que pinta el carrito de libros */}
      <div className="mt-10 ">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Carrito de compras
        </h2>
        <p className="text-xl font-semibold text-center mb-4">
          Total: {totalCarito}
        </p>
        {/* Si el carrito no esta vacio, renderizo con UL los libros del carrito */}
        {cart.length === 0 ? (
          <p className="text-center">El carrito esta vacio</p>
        ) : (
          <ul>
            {cart.map((product, index) => (
              <LiProductCart index={index} product={product} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
