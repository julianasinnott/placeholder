import { X } from "phosphor-react";
import { StyledDrawer, StyledIcon, StyledTitle, StyledTop } from "./styles";

export function Drawer({children, handleClick}) {
  return(
    <StyledDrawer>      
      <StyledTop>
        <StyledTitle>
          Novo Post
        </StyledTitle>
        <StyledIcon
          onClick={()=> handleClick(false)}
        >
          <X size={30} weight='bold'/>
        </StyledIcon>
      </StyledTop>
      {children}
    </StyledDrawer>
  )
}