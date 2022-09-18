import { Header } from "../Header";
import { StyledMain } from "./styles";

export function Template({children}) {
  return(
    <>
      <Header />
      <StyledMain>
        {children}
      </StyledMain>
    </>
  )
}