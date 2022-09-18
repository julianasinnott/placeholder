import { StyledCard, StyledTitle, StyledContent } from "./styles"

export function Card({data}) {
  return(
    <StyledCard>
      <StyledTitle>
        {data.title}
      </StyledTitle> 
      <StyledContent>
        {data.body}
      </StyledContent>
    </StyledCard>
  )
}