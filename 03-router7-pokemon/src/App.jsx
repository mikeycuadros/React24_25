import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { PokemonProvider } from "./context/PokemonContext";

const App = () => {
  // Cuando usemos REACT ROUTER DOM App solo deberia tener el ROUTER PROVIDER
  // Y el resto de cosas deberian estar en RootLayout
  return (
    <PokemonProvider>
      <RouterProvider router={router} />;
    </PokemonProvider>
  );
};

export default App;
