import styled from "styled-components"

export const StyledCardList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 20px;
  padding: 0 10px 8px 10px;
  border-bottom: 1px solid var(--secundary);
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px
  }  
`
export const StyledDiv = styled(StyledCardList)`
  border: none;
  gap: 8px;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    padding: 0;
  } 
`

export const StyledTitle = styled.span`
  color: var(--white);
  font-weight: 100;
  @media only screen and (max-width: 600px) {
    /* padding-right: 10px; */
    /* text-align: center; */
    font-size: 18px;
  }
`
export const StyledIcon = styled.div`
  color: var(--white);
  cursor: pointer;
  &:hover {
    color: var(--tertiary);
  }
`