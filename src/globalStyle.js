import styled from "styled-components";

export const StyledLabel = styled.label`
 display: flex;
 flex-direction: column;
 gap: 8px;
`

export const StyledLabelText = styled.span`
  font-size: 16px;
  color: var(--white);
`

export const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 6px;
  border: none;
  font-size: 20px;
  color: var(--white);
  background-color: var(--primary);
  cursor: pointer;
  &:hover {
    box-shadow: var(--shadowWhite);
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

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px;
`