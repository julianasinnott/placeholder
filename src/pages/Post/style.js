import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
`
export const StyledSection = styled.section`
  border-top: 1px solid var(--secundary);
  border-bottom: 1px solid var(--secundary);
  display: flex;
  justify-content: space-around;
  align-items: center;  
  padding: 
  ${
    props => props.padding && '20px'
  };
`

export const StyledPostSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 20px;
`

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  letter-spacing: 2px;  
`

export const StyledBody = styled.p`
  font-size: 30px;
  font-weight: 100;
  text-align: center;
`

export const StyledName = styled.h2`
  /* text-align: center; */
`