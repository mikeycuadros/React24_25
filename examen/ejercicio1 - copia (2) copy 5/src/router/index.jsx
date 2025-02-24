import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ProductoList from "../components/ProductoList";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/products",
        element: <ProductoList />,
      },
    ],
  },
]);
