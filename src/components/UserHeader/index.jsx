import { StyledSection } from "../../globalStyle"
import { StyledLink, StyledIcon } from "./style"
import { Link } from "react-router-dom"
import { User } from "phosphor-react"

export function UserHeader({user, spaceBetween, padding}) {
  return(
    <StyledSection spaceBetween={spaceBetween} padding={padding}>
      <StyledLink target='_blank' to={`/users/${user.id}`}>
        <h2>
          {user.name}
        </h2>
      </StyledLink>
      <Link target='_blank' to={`/users/${user.id}`}>
        <StyledIcon>
          <User size={40}/> 
        </StyledIcon>   
      </Link>
    </StyledSection>
  )
}