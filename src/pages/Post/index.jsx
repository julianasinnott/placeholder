import { useParams } from "react-router-dom"
import { Template } from "../../components/template"
import { UserHeader } from "../../components/UserHeader"
import { StyledSection, StyledDiv } from "../../globalStyle"
import { StyledPostSection, StyledTitle, StyledBody, StyledCommentName, StyledCommentBody } from "./style"
import { useGetApiData } from "../../hooks/useGetApiData"

export function Post() {
  const { postId, userId } = useParams()
  const post = useGetApiData(`/posts/${postId}`)
  const comments = useGetApiData(`/posts/${postId}/comments`)
  const user = useGetApiData(`/users/${userId}`)

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