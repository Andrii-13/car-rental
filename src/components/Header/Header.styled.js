import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;

  height: 50px;
  width: 100%;
  padding: 10px 0;
  background-color: ${p => p.theme.buttonColor};
  color: green;

  nav {
    display: flex;
    align-items: center;
    width: 1140px;
    gap: 20px;
    margin-left: 20px;
  }
  .active {
    color: tomato;
  }
`;

export const Link = styled(NavLink)`
  color: white;
`;
