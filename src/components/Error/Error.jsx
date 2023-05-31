import { StyledBackNavLink } from 'components/Error/Error.styled';
import { Img } from './Error.styled';
import { Section, Container } from 'components/App.styled';
import Error_404 from '../../images/Error_404.gif';
const Error = () => {
  return (
    <Section>
      <Container>
        <div>
          <StyledBackNavLink to="/">Go to Home Page</StyledBackNavLink>
          <Img src={Error_404} alt="error_404" />
        </div>
      </Container>
    </Section>
  );
};

export default Error;
