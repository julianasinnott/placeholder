import { Pencil, Trash } from "phosphor-react"
import { StyledCardList, StyledDiv, StyledIcon, StyledTitle } from "./styles"

export function CardList({data, deletePost, setShowDrawer, setForm, setUpdate, setPostId}) {

  function handleCLick() {
    setForm(data)
    setShowDrawer(true)
    setUpdate(true)
    setPostId(data.id)
  }

  return(
    <StyledCardList>
      <StyledTitle>
        {data.title}
      </StyledTitle>
      <StyledDiv>
        <StyledIcon>
          <Pencil onClick={handleCLick} />
        </StyledIcon>
        <StyledIcon>
          <Trash onClick={()=> deletePost(data.id)}/>
        </StyledIcon>        
      </StyledDiv>
    </StyledCardList>
  )
}