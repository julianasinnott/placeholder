import styled from "styled-components";
import { Link } from "react-router-dom"

export const StyledHeader = styled.header`  
  width: 100%;
  height: 80px;
  padding: 0 40px;
  background: var(--primary);
`
export const StyledTitle = styled.p`
  font-size: 40px;
  color: var(--secundary);
  
`
export const StyledP = styled(StyledTitle)`
  color: var(--white);
  margin-left: 20px;
`

export const StyledLink = styled(Link)`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
`