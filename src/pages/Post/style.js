import styled from "styled-components";

export const StyledPostSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 20px;
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`

export const StyledTitle = styled.h1`
  text-align: center;
  align-self: center;
  font-size: 36px;
  letter-spacing: 2px;  
  width: max-content;
  max-width: 100%;
  border-bottom: 1px solid var(--tertiary);
  margin: ${
    props => props.margin
  };
  @media only screen and (max-width: 600px) {
    font-size: 28px;
    margin: ${
      props => props.marginMobile
    };
  }
`

export const StyledBody = styled.p`
  font-size: 24px;
  font-weight: 100;
  text-align: center;
  margin: 40px 0;
  @media only screen and (max-width: 600px) {
    margin: 20px 0;
    font-size: 20px;
  }
`

export const StyledCommentName = styled.p`
 font-size: 18px;
 align-self: flex-start;
`

export const StyledCommentBody = styled.p`
  font-size: 14px;
  font-weight: 100;
  align-self: flex-start;
`