import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrendingMovies } from 'components/service/api';
import Spinner from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies);
        setLoading(false);
      } catch (error) {
        toast.error('Sorry, something went wrong.');
      }
    };
    getData();
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {error && <ToastContainer />}
      <h2>Trending today</h2>
      <MoviesList trendingMovies={trendingMovies} />
    </div>
  );
};
export default Home;
