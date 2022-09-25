import { User } from "phosphor-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Template } from "../../components/template"
import api from "../../services/api"
import { StyledLink, StyledSection, StyledPostSection, StyledTitle, StyledDiv, StyledBody, StyledIcon, StyledCommentName, StyledCommentBody } from "./style"

export function Post() {
  const [post, setPost] = useState('')
  const [comments, setComments] = useState([])
  const [user, setUser] = useState('')
  const { slug } = useParams()

  useEffect(()=> {
    async function getPost() {
      try {
        const post = await api.get(`/posts/${slug}`)
        const comments = await api.get(`/posts/${slug}/comments`)
        const user = await api.get(`/users/${post.data.userId}`)
        setPost(post.data)
        setComments(comments.data)
        setUser(user.data)
        console.log(user.data)
      }
      catch {
        console.error(err)
      }
    }
    getPost()
  }, [])

  return(
    <Template>
      <StyledDiv>
        <StyledSection>
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
        <StyledPostSection>
          <StyledTitle>
            {post.title}
          </StyledTitle>
          <StyledBody>
            {post.body}
          </StyledBody>
          {
            comments.map(comment => (
              <StyledSection key={comment.id} column gray>
                <StyledCommentName>
                  {comment.name}                  
                </StyledCommentName>
                <StyledCommentBody>
                  {comment.body}
                </StyledCommentBody>
              </StyledSection>
            ))
          }
        </StyledPostSection>
      </StyledDiv>
    </Template>
  )
}