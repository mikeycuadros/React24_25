import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import PokemonDetail from "../pages/PokemonDetail";
import Favorites from "../pages/Favorites";
import Error from "../pages/Error";
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
        // loader es una caracteristica de react-router-dom que permite cargar los datos antes de renderizar los componentes
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            if (!response.ok) {
              throw new Error("Error fetching data");
            }
            const data = await response.json();
          } catch (error) {}
        },
        errorElement: <Error />,
      },
    ],
  },
  {},
]);
