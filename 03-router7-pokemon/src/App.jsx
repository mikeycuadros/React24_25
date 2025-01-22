import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";

const App = () => {
  // Cuando usemos REACT ROUTER DOM App solo deberia tener el ROUTER PROVIDER
  // Y el resto de cosas deberian estar en RootLayout
  return <RouterProvider router={router} />;
};

export default App;
