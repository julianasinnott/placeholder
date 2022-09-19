import { Trash } from "phosphor-react"
import { StyledCardList, StyledIcon, StyledTitle } from "./styles"

export function CardList({data}) {
  return(
    <StyledCardList>
      <StyledTitle>
        {data.title}
      </StyledTitle>
      <StyledIcon>
        <Trash />
      </StyledIcon>
    </StyledCardList>
  )
}