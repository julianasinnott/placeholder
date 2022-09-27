import { StyledCard, StyledTitle, StyledContent, StyledLink } from "./styles"

export function Card({data, width1130px, width900px}) {
  return(
    <StyledLink target="blank" to={`/posts/${data.id}/${data.userId}`}>
        <StyledCard width1130px={width1130px} width900px={width900px}>
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