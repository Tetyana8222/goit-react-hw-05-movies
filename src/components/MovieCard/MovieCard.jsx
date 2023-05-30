import {
  MovieCardInfo,
  Img,
  MovieTitle,
  Score,
  Title,
  AddInfo,
  CartNav,
  StyledNavLink,
  Button,
} from './MovieCard.styled';
import { Container, Section } from 'components/App.styled';
import noImage from '../../images/noImage.png';

export const MovieCard = ({ movieInfo }) => {
  const getReleaseYear = releaseDate => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };
  const getGenres = arrGenres => {
    return arrGenres.map(genre => genre.name).join(', ');
  };
  return (
    <Section>
      <Container>
        <MovieCardInfo>
          <div>
            {' '}
            {movieInfo.poster_path ? (
              <Img
                alt={movieInfo.title}
                src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
                width={`100`}
              />
            ) : (
              <Img src={noImage} alt=" poster is not available" />
            )}
          </div>

          <div>
            <MovieTitle>
              {movieInfo.title}
              <p>({getReleaseYear(movieInfo.release_date)})</p>
            </MovieTitle>
            <Score> User Score: {~~(movieInfo.vote_average * 10)}%</Score>
            <Title>Overview</Title>
            <p>{movieInfo.overview}</p>
            <div>
              {' '}
              <Title>Genres</Title>
              <p>{getGenres(movieInfo.genres)}</p>
            </div>

            <AddInfo>
              <Title>Additional Information</Title>
              <CartNav>
                <StyledNavLink to="cast">
                  <Button>Cast</Button>
                </StyledNavLink>

                <StyledNavLink to="reviews">
                  <Button>Reviews</Button>
                </StyledNavLink>
              </CartNav>
            </AddInfo>
          </div>
        </MovieCardInfo>
      </Container>
    </Section>
  );
};

export default MovieCard;