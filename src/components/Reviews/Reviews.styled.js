import styled from '@emotion/styled';

export const Section = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;
export const ReviewsTitle = styled.h3`
  font-family: Helvetica Neue;
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0;
  line-height: 1.2;
  padding-left: 9px;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 1em;
  margin-left: 24px;
  text-decoration: underline 3px;
  text-underline-offset: 8px; /* Зсув лінії від тексту на 5 пікселів */
  text-decoration-color: red; /* Колір підкреслення заголовка */
  &:before {
    position: absolute;
    content: '';
    height: 1.1em;
    border-left: 3px solid #fff;
    margin: -1px 0 0 -9px;
  }
`;
export const Ul = styled.ul`
  list-style: none;
`;
export const Li = styled.li`
  border: 1px solid #546e7c;
  border-radius: 10px;
  width: 1100px;
  padding: 15px;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    background-color: #506e7c;
    color: #e0e0e0;
  }
`;
export const P = styled.p`
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const NoReviews = styled.p`
  font-size: 30px;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 200px;
  margin-left: 400px;
`;
