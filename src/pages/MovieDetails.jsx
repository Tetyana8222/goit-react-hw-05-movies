import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { NavLink, useParams } from 'react-router-dom';

import Spinner from 'components/Loader/Loader';
import { getMovieDetails } from 'components/service/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Container } from 'components/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        setLoading(true);
        const movieInfo = await getMovieDetails(movieId);
        setMovieInfo(movieInfo);
        setLoading(false);
      } catch (error) {
        toast.error('Sorry, something went wrong.');
      }
    };
    getMovieInfo();
  }, [movieId]);

  return (
    <>
      {loading && <Spinner />}
      <section>
        <Container>
          {movieInfo && <MovieCard movieInfo={movieInfo} />}
        </Container>
      </section>
      <NavLink>Go Back</NavLink>
    </>
  );
};

export default MovieDetails;
