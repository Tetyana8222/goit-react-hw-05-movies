import { StyledHeader, HeaderNav, StyledNavLink } from './Header.styled';
// import { Container } from 'components/App.styled';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;
