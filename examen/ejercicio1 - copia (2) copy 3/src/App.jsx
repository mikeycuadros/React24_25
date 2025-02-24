import ProductoList from "./components/ProductoList";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <ProductoList />
    </ProductProvider>
  );
};

export default App;
