import Button from "./Button";
const ProductCard = (props) => {
  const { product, addCart } = props;

  const handlerClick = () => {
    // Añadira el producto al carrito
    addCart(product);
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-2">{product?.titulo}</h2>
      <p className="text-gray-700 mb-4">Precio: {product?.precio}</p>
      <Button
        onClick={handlerClick}
        className="bg-gray-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition"
      >
        Añadir al carrito
      </Button>
      {/* <button
        className="bg-gray-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition"
        onClick={handlerClick} 
      >
        Añadir al carrito
      </button> */}
    </div>
  );
};

export default ProductCard;
