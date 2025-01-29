import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        index: true,
        element: <Profile />,
      },
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
