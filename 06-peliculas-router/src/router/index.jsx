import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MovieDetail from "../pages/MovieDetail";
import Home from "../pages/Home";
import MovieList from "../pages/MovieList";
import Reviews from "../pages/Reviews";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <MovieList />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "search",
        element: <Reviews />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);
