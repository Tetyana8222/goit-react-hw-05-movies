import axios from 'axios';

const KEY = 'b88a81f4023f887d7c5099f96529b634';
const URL = 'https://api.themoviedb.org/3';
const URL_TRENDING_MOVIES = 'https://api.themoviedb.org/3/trending/all/day';
const URL_SEARCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';
const URL_SEARCH_BY_ID = 'https://api.themoviedb.org/3/movie';

export async function getTrendingMovies() {
  axios.defaults.params = {
    api_key: KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL_TRENDING_MOVIES}`);
    // console.log(data);
    return data.results;
  } catch (error) {}
}

export async function searchMovieByName(name) {
  axios.defaults.params = {
    api_key: KEY,
    language: 'en-US',
    query: `${name}`,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_NAME}`);
    return data.results;
  } catch (error) {}
}
