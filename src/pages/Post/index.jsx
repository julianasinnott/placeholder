import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Template } from "../../components/template"
import { UserHeader } from "../../components/UserHeader"
import { StyledSection, StyledDiv } from "../../globalStyle"
import { StyledPostSection, StyledTitle, StyledBody, StyledCommentName, StyledCommentBody } from "./style"
import api from "../../services/api"

export function Post() {
  const [post, setPost] = useState('')
  const [comments, setComments] = useState([])
  const [user, setUser] = useState('')
  const { slug } = useParams()

  useEffect(()=> {
    async function getData() {
      try {
        const post = await api.get(`/posts/${slug}`)
        const comments = await api.get(`/posts/${slug}/comments`)
        const user = await api.get(`/users/${post.data.userId}`)
        setPost(post.data)
        setComments(comments.data)
        setUser(user.data)
      }
      catch {
        console.error(err)
      }
    }
    getData()
  }, [])
  
  return(
    <Template>
      <StyledDiv>
        <UserHeader user={user} />
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