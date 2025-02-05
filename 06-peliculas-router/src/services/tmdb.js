const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

export const SIZE = {
  POSTER: "w500",
  ORIGINAL: "original",
};

// Funcion para hacer fetch a la API URL, opciones
const fetchFromApi = async (endpoint, options = {}) => {
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES`
    );
    if (!response.ok) throw new Error("Error en la peticion");
    const { result } = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Funcion para obtener las peliculas populares
export const getPopularMovies = async () => {
  return await fetchFromApi("/movie/popular");
};

// Funcion para obtener los detalles de una pelicula
export const getMovieDetails = async (id) => {
  return await fetchFromApi(`/movie/${id}`);
};

// Funcion para obtener los videos de una pelicula
export const getMovieVideos = async (id) => {
  return await fetchFromApi(`/movie/${id}/videos`);
};
