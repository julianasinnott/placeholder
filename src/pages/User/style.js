import styled from "styled-components";

export const StyledParagraph = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--secundary);
`

export const StyledLink = styled.p`
  color: var(--tertiary);
  text-decoration: underline;
`

export const StyledUserSection = styled.div `
  display: flex;
`

export const StyledPostSection = styled(StyledUserSection)`
  flex-direction: column;
`

