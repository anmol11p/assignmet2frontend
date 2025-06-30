export const getApiData = async (search = "titanic") => {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_OMDB_API;
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
