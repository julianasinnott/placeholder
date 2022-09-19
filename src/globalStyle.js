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