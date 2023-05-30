import React from 'react';

import {
  MoviesListTitle,
  Movies,
  Ul,
  Li,
  StyledLink,
  Thumb,
  Img,
  Title,
} from './MoviesList.styled';

export const MoviesList = ({ trendingMovies }) => {
  return (
    <>
      <Movies>
        <Ul>
          {trendingMovies.map(movie => {
            return (
              <Li key={movie.id}>
                <StyledLink to={`/movies/${movie.id}`}>
                  <Thumb>
                    <Img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      width={`200`}
                      alt="preview"
                    />
                    {movie.title && <Title>{movie.title}</Title>}
                    {movie.name && <Title>{movie.name}</Title>}
                  </Thumb>
                </StyledLink>
              </Li>
            );
          })}
        </Ul>
      </Movies>
    </>
  );
};
