import { StyledCard, StyledTitle, StyledContent, StyledLink } from "./styles"

export function Card({data}) {
  return(
    <StyledLink target="blank" to={`/posts/${data.id}`}>
        <StyledCard>
        <StyledTitle>
          {data.title}
        </StyledTitle> 
        <StyledContent>
          {data.body}
        </StyledContent>
      </StyledCard>
    </StyledLink>
  )
}