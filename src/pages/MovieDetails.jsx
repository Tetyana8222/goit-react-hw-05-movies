import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { NavLink, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from 'components/Loader/Loader';
import { getMovieDetails } from 'components/service/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
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

  const getReleaseYear = releaseDate => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };
  const getGenres = arrGenres => {
    return arrGenres.map(genre => genre.name).join(', ');
  };
  return (
    <>
      <Link>Go Back</Link>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {movieInfo.poster_path ? (
            <img
              alt={movieInfo.title}
              src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
              width={`100`}
            />
          ) : (
            <img alt=" poster is not available" />
          )}
          <div>
            <h1>
              {movieInfo.title} ({getReleaseYear(movieInfo.release_date)})
            </h1>
            <p>User score:???</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h3>Genres</h3>
            <p>{getGenres(movieInfo.genres)}</p>
            <h3>Additional Information</h3>
            <ul>
              <li>
                <Link to="cast">
                  <button>Cast</button>
                </Link>
              </li>
              <li>
                <Link to="reviews">
                  <button>Reviews</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
