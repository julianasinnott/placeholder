import styled from "styled-components";

export const StyledDrawer = styled.div` 
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  background-color: var(--secundary);
  max-width: 400px;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 500px){
    max-width: 100%;
 }`
export const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;  
`
export const StyledTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: var(--white);
`

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  color: var(--white);
  background-color: var(--primary);
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: var(--white);
    color: var(--primary);
  }
`