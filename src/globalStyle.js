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
  justify-content:
  ${
    props => props.spaceBetween ? 'space-between' : 'space-around'
  };
  align-items: center; 
  padding:
  ${
    props => props.padding
  }
  ;
  border-radius: 6px;
  flex-direction: 
  ${
    props => props.column && 'column'
  };
  background-color: ${
    props => props.grey && 'var(--secundary)'
  };
`

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 
  ${
    props => props.padding
  };
`

export const StyledTitle = styled.h1` 
  align-self: center;
  width: max-content;
  font-size: 28px;
  text-align: center;
  margin: 0 0 40px 0;
  border-bottom: 1px solid var(--tertiary);
`