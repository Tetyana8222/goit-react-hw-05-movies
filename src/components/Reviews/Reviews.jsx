import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'components/service/api';
import Spinner from 'components/Loader/Loader';
import { Section, Container } from 'components/App.styled';
import { ReviewsTitle, Ul, Li, P, NoReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
        console.log(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : reviews && reviews.length > 0 ? (
        <Section>
          <Container>
            <ReviewsTitle>Reviews</ReviewsTitle>
            <Ul>
              {reviews.map(({ author, content, id }) => (
                <Li key={id}>
                  <P> {author}</P>
                  {content && <p>{content}</p>}
                </Li>
              ))}
            </Ul>
          </Container>
        </Section>
      ) : (
        <Section>
          <Container>
            <NoReviews>No reviews found</NoReviews>
          </Container>
        </Section>
      )}
    </>
  );
};

export default Reviews;
