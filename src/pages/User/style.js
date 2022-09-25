import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledParagraph = styled.p `
  width: 40%;
  border-bottom: 1px solid var(--secundary);
`

export const StyledLink = styled(Link)`
  color: var(--tertiary);
`

export const StyledTitle = styled.h1` 
  align-self: center;
  width: max-content;
  font-size: 28px;
  text-align: center;
  margin: 40px 0;
  border-bottom: 1px solid var(--tertiary);
`
