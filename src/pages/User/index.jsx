import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Template } from '../../components/template'
import { UserHeader } from "../../components/UserHeader"
import { CardList } from "../../components/CardList"
import api from "../../services/api"
import { StyledLink, StyledParagraph, StyledTitle } from "./style"
import { StyledDiv } from "../../globalStyle"
import { Posts } from "../../components/Posts"

export function User() {
  const [user, setUser] = useState('')
  const [posts, setPosts] = useState('')
  const { slug } = useParams()

  useEffect(()=> {
    async function getData() {
      try {
        const user = await api.get(`/users/${slug}`)
        const posts = await api.get(`/users/${slug}/posts`) 
        setUser(user.data)
        setPosts(posts.data)       
      }
      catch {
        console.error(err)
      }
    }
    getData()
  }, [])
  console.log(posts)
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