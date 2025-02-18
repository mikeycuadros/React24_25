import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <form
        onSubmit={handleSearch}
        className="flex border-2 border-gray-200 rounded"
      >
        <input
          type="text"
          className="px-4 py-2 w-80 outline-none"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
