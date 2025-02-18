const SearchBox = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex border-2 border-gray-200 rounded">
        <input
          type="text"
          className="px-4 py-2 w-80 outline-none"
          placeholder="Buscar..."
        />
      </div>
    </div>
  );
};

export default SearchBox;
