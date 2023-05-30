import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastInfo } from 'components/service/api';
import { toast } from 'react-toastify';
import Spinner from 'components/Loader/Loader';
import {
  Section,
  CastTitle,
  CastList,
  CastItem,
  ActorImg,
  ActorName,
  Character,
} from './Cast.styled';
import noImage from '../../images/noImage.png';
import { Container } from 'components/App.styled';
import { Thumb } from 'components/Cast/Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    getCastInfo(movieId)
      .then(data => {
        setCast(data.cast);
        // console.log(data.cast);
      })
      .catch(error => {
        setError(error);
        console.log(error);
        toast(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Section>
          <Container>
            {error && <p>{error}</p>}
            <CastTitle>Cast and Crew</CastTitle>
            <CastList>
              {cast.map(({ credit_id, profile_path, name, character }) => (
                <CastItem key={credit_id}>
                  <Thumb>
                    <ActorImg
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                          : noImage
                      }
                      alt="preview"
                    />
                  </Thumb>

                  <ActorName>{name}</ActorName>
                  <Character>Character:{character}</Character>
                </CastItem>
              ))}
            </CastList>
          </Container>
        </Section>
      )}
    </>
  );
};

export default Cast;
