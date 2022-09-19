import styled from "styled-components"

export const StyledCardList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--secundary);
`
export const StyledTitle = styled.span`
  color: var(--white);
  font-weight: 100;
`
export const StyledIcon = styled.div`
  color: var(--white);
  cursor: pointer;
  &:hover {
    color: var(--tertiary);
  }
`