import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-betweem;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #26aea8;

  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;
