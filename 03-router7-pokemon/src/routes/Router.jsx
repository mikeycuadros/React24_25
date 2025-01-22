import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import PokemonDetail from "../pages/PokemonDetail";
import Favorites from "../pages/Favorites";
import { ROUTES } from "./paths";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SEARCH,
        element: <Search />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <Favorites />,
      },
      {
        path: ROUTES.POKEMON_DETAIL,
        element: <PokemonDetail />,
      },
    ],
  },
  {},
]);
