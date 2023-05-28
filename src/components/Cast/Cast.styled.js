import styled from '@emotion/styled';

export const Section = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;
export const CastTitle = styled.h3`
  font-family: Helvetica Neue;
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0;
  line-height: 1.2;
  padding-left: 9px;
  text-transform: uppercase;
  margin-bottom: 1em;
  text-decoration: underline;
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

export const CastList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  /* justify-content: space-between; */
`;

export const CastItem = styled.li`
  width: 120px;
`;

export const ActorImg = styled.img`
  width: 100%;
  height: auto;
`;

export const ActorName = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const Character = styled.p`
  font-size: 10px;
  font-weight: 400;
`;
