import styled from "styled-components";

export const StyledPostSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 20px;
`

export const StyledTitle = styled.h1`
  text-align: center;
  align-self: center;
  font-size: 36px;
  letter-spacing: 2px;  
  width: max-content;
  max-width: 100%;
  border-bottom: 1px solid var(--tertiary);
`

export const StyledBody = styled.p`
  font-size: 24px;
  font-weight: 100;
  text-align: center;
  margin: 40px 0;
`

export const StyledCommentName = styled.p`
 font-size: 20px;
`

export const StyledCommentBody = styled.p`
  font-weight: 100;
  text-align: center;
`