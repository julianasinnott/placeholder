import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  color: var(--white);
  background: var(--background);
  @media only screen and (max-width: 600px) {
    padding: ${
      props => props.paddingMobile
    }
  }
`;
