import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrendingMovies } from 'components/service/api';
import Spinner from 'components/Loader/Loader';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Section, Container } from 'components/App.styled';
import { MoviesListTitle } from 'components/MoviesList/MoviesList.styled';

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
        setError(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {error && <ToastContainer />}
      <Section>
        <Container>
          <MoviesListTitle>Trending Movies</MoviesListTitle>
          <MoviesList trendingMovies={trendingMovies} />
        </Container>
      </Section>
    </div>
  );
};
export default Home;
