import styled from "styled-components"

export const StyledCardList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 20px;
  padding: 0 10px 8px 10px;
  border-bottom: 1px solid var(--secundary);
`
export const StyledDiv = styled(StyledCardList)`
  border: none;
  gap: 4px
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