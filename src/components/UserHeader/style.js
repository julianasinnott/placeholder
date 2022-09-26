import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  &:hover {
    color: var(--tertiary);
    scale: 1.06;
    transition: all 0.4s ease-in-out;
  }  
`

export const StyledIcon = styled.div`
  color: var(--white);
  display: flex;
  align-items: center;
  background-color: var(--secundary);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--tertiary);
    scale: 1.06;
    transition: all 0.4s ease-in-out;
  }
`