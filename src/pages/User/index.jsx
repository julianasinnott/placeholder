import { useParams } from "react-router-dom"
import { Template } from '../../components/template'
import { UserHeader } from "../../components/UserHeader"
import { StyledUserSection, StyledLink, StyledParagraph, StyledPostSection } from "./style"
import { StyledDiv, StyledTitle } from "../../globalStyle"
import { Posts } from "../../components/Posts"
import { useGetApiData } from "../../hooks/useGetApiData"
import { EnvelopeSimple, Link, Phone } from "phosphor-react"

export function User() {
  const { slug } = useParams()
  const user = useGetApiData(`/users/${slug}`)
  const posts = useGetApiData(`/users/${slug}/posts`)

  return(
    <Template>
      <StyledUserSection>
        <StyledDiv padding='0 30px'>
          <UserHeader user={user} spaceBetween={true} padding='20px 2px'/>
          <StyledParagraph>
            {user.username}
          </StyledParagraph>
          <StyledParagraph>
            <EnvelopeSimple />
            <a href={`mailto:${user.email}`}>
              <StyledLink>
                {user.email}
              </StyledLink>
            </a>          
          </StyledParagraph>
          <StyledParagraph>
            <Link />
            <a href={`http://${user.website}`} target="_blank">
              <StyledLink>
                {user.website}
              </StyledLink>
            </a>
          </StyledParagraph>
          <StyledParagraph>
            <Phone />
            <a href={`tel:+${user.phone}`}>
              <StyledLink>
                {user.phone}
              </StyledLink>
            </a>
          </StyledParagraph>
        </StyledDiv>    
        <StyledPostSection>
          <StyledTitle>
            {user.name} Posts
          </StyledTitle>
          { posts && <Posts data={posts} /> }
        </StyledPostSection>         
      </StyledUserSection>
    </Template>
  )
}