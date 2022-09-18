import styled from "styled-components";

export const StyledHeader = styled.header`
  width:100%;
  height:80px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  background: var(--primary);
`
export const StyledTitle = styled.p`
  font-size: 40px;
  color: var(--secundary);
  
`
export const StyledP = styled(StyledTitle)`
  color: var(--white);
  margin-left: 20px;
`