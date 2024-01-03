import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contant: center;
`;

export const Text = styled.p`
  text-shadow: grey 2px 2px 5px;
`;

export const Link = styled(NavLink)``;

export const StyledButton = styled.button`
  width: 120px;
  align-self: center;
  padding: 10px;
  color: white;
  background-color: #4d83c2;
  cursor: pointer;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid rgba(33, 33, 33, 0.2);
`;
