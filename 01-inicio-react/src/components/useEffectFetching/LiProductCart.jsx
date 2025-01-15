const LiProductCart = (props) => {
  const { product, index } = props;
  return (
    <li
      className="bg-gray-400 shadow-lg rounded-lg p-6 flex flex-row justify-between mb-5"
      key={index}
    >
      <span className="text-xl text-blue-500 font-semibold">
        {product.titulo}
      </span>
      <span className="text-xl text-green-900 font-semibold">
        {product.precio}
      </span>
      <button className="bg-slate-600 hover:bg-slate-900 px-4 py-2 rounded-lg text-white">
        Quitar del carrito
      </button>
    </li>
  );
};

export default LiProductCart;
