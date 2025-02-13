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
    //https://api.themoviedb.org/3/movie/popular?api_key=3539fc43f3071ba9255ce12f60a40d5f&language=es-ES
    const response = await fetch(
      `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES&${new URLSearchParams(
        options
      )}`
    );
    if (!response.ok) throw new Error("Error en la peticion");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Funcion para obtener las peliculas populares
export const getPopularMovies = async (page) => {
  return await fetchFromApi("/movie/popular", { page });
};

// Funcion para obtener los detalles de una pelicula
export const getMovieDetails = async (id) => {
  return await fetchFromApi(`/movie/${id}`);
};

// Funcion para obtener la imagen de una pelicula

export const getMovieImage = (path, size = SIZE.POSTER) => {
  return `${BASE_IMAGE_URL}/${size}/${path}`;
};

// Funcion para obtener los videos de una pelicula
export const getMovieVideos = async (id) => {
  return await fetchFromApi(`/movie/${id}/videos`);
};
