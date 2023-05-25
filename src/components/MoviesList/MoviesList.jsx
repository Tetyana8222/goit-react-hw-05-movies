import React from 'react';
import { Link } from 'react-router-dom';

export const MoviesList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                width={`200`}
                alt="preview"
              />
              {movie.title && <p>{movie.title}</p>}
              {movie.name && <p>{movie.name}</p>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
