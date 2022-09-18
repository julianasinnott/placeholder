import { BracketsCurly} from "phosphor-react"
import { StyledHeader, StyledP, StyledTitle } from "./styles"

export function Header() {
  return(
    <StyledHeader>
      <BracketsCurly weight="bold" size={50} color="var(--secundary)" />
      <StyledP>
        P
      </StyledP>
      <StyledTitle>
        laceholder
      </StyledTitle>
    </StyledHeader>
  )
}