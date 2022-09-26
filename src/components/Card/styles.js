import styled from "styled-components";
import { Link } from "react-router-dom"

export const StyledCard = styled.div`
  max-width: 400px;
  width: 100%;
  height: 200px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  cursor: pointer;
  position: relative;
  box-shadow: var(--shadowGrey);
  background: var(--secundary);
  color: var(--white);
  &:hover {
    transform: scale(1.04);
    box-shadow: var(--tertiaryColorShadow);
    transition: all 0.4s ease-in-out;
  }
`;
export const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;
export const StyledContent = styled.p`
  font-size: 16px;
  font-weight: 100;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`
