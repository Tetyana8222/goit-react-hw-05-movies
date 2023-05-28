import React from 'react';
import { Container } from 'components/App.styled';
import { Section } from 'components/App.styled';
import {
  MoviesListTitle,
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
      <Section>
        <Container>
          <MoviesListTitle>Trending Movies</MoviesListTitle>
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
        </Container>
      </Section>
    </>
  );
};
