import { createBrowserRouter } from "react-router-dom";
import ProductList from "../components/ProductList";
import RootLayout from "../layout/RootLayout";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import DashboardPageV2 from "../pages/DashboardPageV2";
import ProductForm from "../pages/ProductForm";
import EditProduct from "../pages/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard2",
        element: (
          <ProtectedRoute>
            <DashboardPageV2 />
          </ProtectedRoute>
        ),
      },
      {
        path: "addProduct",
        element: (
          <ProtectedRoute>
            <ProductForm />
          </ProtectedRoute>
        )
      },
      {
        path: "editProduct/:id",
        element: (
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        )
      }
    ],
  },
]);
