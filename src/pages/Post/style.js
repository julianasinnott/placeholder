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
  &:hover {
    color: var(--tertiary);
    scale: 1.06;
    transition: all 0.4s ease-in-out;
  }  
`
export const StyledSection = styled.section`
  border-top: 1px solid var(--secundary);
  border-bottom: 1px solid var(--secundary);
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center; 
  padding: 20px;
  border-radius: 6px;
  flex-direction: 
  ${
    props => props.column && 'column'
  };
  background-color: ${
    props => props.gray && 'var(--secundary)'
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
  align-self: center;
  font-size: 40px;
  letter-spacing: 2px;  
  width: max-content;
  max-width: 100%;
  border-bottom: 1px solid var(--tertiary);
`

export const StyledBody = styled.p`
  font-size: 30px;
  font-weight: 100;
  text-align: center;
  margin-bottom: 20px;
`

export const StyledCommentName = styled.p`
 font-size: 20px;
`

export const StyledCommentBody = styled.p`
  font-weight: 100;
  text-align: center;
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