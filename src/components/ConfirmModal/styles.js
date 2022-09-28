import styled from "styled-components";

export const StyledModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`

export const StyledModal = styled.div`
  background-color: var(--primary);
  padding: 14px 52px;
  border-radius: 6px;
  box-shadow: var(--shadowWhite);
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: fixed;
  top: 50%;
  right: ${
    props => props.horizontalPosition 
  };
  @media only screen and (max-width: 450px) {
    padding: ${
      props => props.paddingMobile
    };
    right: ${
      props => props.horizontalPositionMobile
    };
  }
`

export const StyledModalTitle = styled.div`
  color: var(--secundary);
  font-size: 30px;
`

export const StyledModalOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: var(--white);
`
export const StyledIcon = styled.div`
  display: flex;
  background-color: var(--secundary);
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  &:hover{
    background-color: var(--white);
    color: var(--primary);
  }
`