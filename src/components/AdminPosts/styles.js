import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: var(--primary);
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover{
    box-shadow: var(--shadowWhite);
    transition: all 0.4s ease-in-out;
  }
`