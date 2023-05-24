import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getTrendingMovies } from 'components/service/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <h2>Trending today</h2>
      <ul>
        {loading
          ? 'Loading...'
          : trendingMovies.map(movie => {
              return (
                <li key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    width={`200`}
                    alt="preview"
                  />
                  {movie.title && (
                    <p>
                      {movie.title}||{movie.name}
                    </p>
                  )}
                </li>
              );
            })}
      </ul>
    </div>
  );
};
export default Home;
