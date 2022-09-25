import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Template } from '../../components/template'
import { UserHeader } from "../../components/UserHeader"
import api from "../../services/api"
import { StyledLink, StyledParagraph, StyledTitle } from "./style"
import { StyledDiv } from "../../globalStyle"
import { Posts } from "../../components/Posts"
import { useGetApiData } from "../../hooks/useGetApiData"

export function User() {
  const { slug } = useParams()
  const { data: user } = useGetApiData(`/users/${slug}`)
  const { data: posts } = useGetApiData(`/users/${slug}/posts`)

  return(
    <Template>
      <StyledDiv>
        <UserHeader user={user}/>
        <StyledParagraph>
          {user.username}
        </StyledParagraph>
        <StyledParagraph>
          <StyledLink>
            {user.email}
          </StyledLink>
        </StyledParagraph>
        <StyledParagraph>
          <StyledLink> 
            {user.website} 
          </StyledLink>
        </StyledParagraph>
        <StyledParagraph>
          phone: {user.phone}
        </StyledParagraph>
        <StyledTitle>
          Posts de {user.name}
        </StyledTitle>
      </StyledDiv>    
      {
        posts && <Posts data={posts} />
      }
    </Template>
  )
}