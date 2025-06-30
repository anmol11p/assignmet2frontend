export const getMovieDetailsInside = async (id) => {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_OMDB_API;
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
