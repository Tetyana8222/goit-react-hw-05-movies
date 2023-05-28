import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b88a81f4023f887d7c5099f96529b634',
    language: 'en-US',
  },
});

export async function getTrendingMovies() {
  const query = `/trending/all/day`;
  try {
    const { data } = await instance.get(query);
    return data.results;
  } catch (error) {
    throw error;
  }
}
export async function getMovieDetails(id) {
  const query = `/movie/${id}`;
  try {
    const { data } = await instance.get(query);
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCastInfo(id) {
  const query = `/movie/${id}/credits`;
  try {
    const { data } = await instance.get(query);
    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMovieReviews(id) {
  const query = `/movie/${id}/reviews`;
  try {
    const { data } = await instance.get(query);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
