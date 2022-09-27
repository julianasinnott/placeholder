import { Header } from "../Header";
import { StyledMain } from "./styles";

export function Template({children, paddingMobile}) {
  return(
    <>
      <Header />
      <StyledMain paddingMobile={paddingMobile}>
        {children}
      </StyledMain>
    </>
  )
}