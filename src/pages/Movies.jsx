import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'components/service/api';
import { Container, Section } from 'components/App.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Spinner from 'components/Loader/Loader';
import { MoviesListTitle } from 'components/MoviesList/MoviesList.styled';
import movies_popcorn from '../images/movies_popcorn.gif';

const Movies = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(`query`);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieByName(query);
        setMoviesArray(results);
        console.log(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      getData();
    }
  }, [query]);

  const handleSubmit = query => {
    // event.preventDefault();
    setSearchParams({ query: query });
  };

  return (
    <>
      <Container>
        <Section>
          <MoviesListTitle>Пошук фільмів:</MoviesListTitle>
          <SearchForm onSubmit={handleSubmit} />

          {moviesArray.length === 0 && <img src={movies_popcorn} alt="пошук" />}
          {loading ? (
            <Spinner />
          ) : (
            moviesArray.length !== 0 && (
              <MoviesList trendingMovies={moviesArray} />
            )
          )}
        </Section>
      </Container>
    </>
  );
};

export default Movies;
