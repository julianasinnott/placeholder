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
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    gap: 40px;
  }
`
export const StyledPostSection = styled(StyledUserSection)`
  flex-direction: column;
  padding-top: 30px;
  @media only screen and (max-width: 1130px) {
    width: 250%;
    padding: 30px 10px
  }
  @media only screen and (max-width: 940px) {
    width: 150%;
  }
  @media only screen and (max-width: 800px) {
    padding-top: 20px;
  }
  @media only screen and (max-width: 650px) {
    width: 100%;
    padding: 0;
  }
`



