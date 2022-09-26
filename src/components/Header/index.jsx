import { BracketsCurly} from "phosphor-react"
import { StyledHeader, StyledLink, StyledP, StyledTitle } from "./styles"

export function Header() {
  return(
    <StyledHeader>
      <StyledLink to='/'>
        <BracketsCurly weight="bold" size={50} color="var(--secundary)" />
        <StyledP>
          P
        </StyledP>
        <StyledTitle>
          laceholder
        </StyledTitle>      
      </StyledLink>
    </StyledHeader>
  )
}