import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  z-index: 12;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  height: 4.6875rem;
  position: fixed;
  top: 0px;
  display: flex;
  align-items: center;
  background: #546e7c;
  background: linear-gradient(125deg, #546e7c, #000000);
  margin-bottom: 70px;
`;

export const HeaderNav = styled.nav`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 350px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  text-transform: uppercase;
  color: #fff;
  border: solid 3px #fff;
  border-radius: 8px;
  padding: 6px 20px;
  &:hover {
    transform: scale(1.2);
  }
  &:not(:last-child) {
    margin-right: 50px;
  }
`;
