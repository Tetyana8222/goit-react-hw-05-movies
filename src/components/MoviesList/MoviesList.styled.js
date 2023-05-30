import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  border-radius: 5px;
`;

export const Movies = styled.div`
  padding-top: 30px;
`;
export const MoviesListTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: #000;
  padding-top: 30px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Li = styled.li`
  text-align: center;
  width: 220px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Thumb = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 5px;
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
export const Title = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* position: absolute; */
  width: 100%;
  left: 0;
  bottom: 0;
  height: 60px;
  margin: 0;
  background-color: rgba(47, 48, 58, 0.4);
`;
