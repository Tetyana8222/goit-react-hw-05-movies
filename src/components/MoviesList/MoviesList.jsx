import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Movies,
  Ul,
  Li,
  StyledLink,
  Thumb,
  Img,
  Title,
} from './MoviesList.styled';
import noImage from '../../images/noImage.png';

export const MoviesList = ({ trendingMovies }) => {
  const location = useLocation();
  // console.log(location);

  return (
    <>
      <Movies>
        <Ul>
          {trendingMovies.map(movie => {
            return (
              <Li key={movie.id}>
                <StyledLink
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  <Thumb>
                    {movie.poster_path ? (
                      <Img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        width={`200`}
                        alt="preview"
                      />
                    ) : (
                      <Img src={noImage} alt="No Image Available" />
                    )}
                  </Thumb>
                  {movie.title && <Title>{movie.title}</Title>}
                  {movie.name && <Title>{movie.name}</Title>}
                </StyledLink>
              </Li>
            );
          })}
        </Ul>
      </Movies>
    </>
  );
};
