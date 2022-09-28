import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
`

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: var(--primary);
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover{
    background-color: var(--tertiary);
    transition: all 0.4s ease-in-out;
  }
  @media only screen and (max-width: 600px) {
    bottom: 30px;
    right: 30px;
  }
`