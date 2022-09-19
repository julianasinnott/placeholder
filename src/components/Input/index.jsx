import { StyledInput, StyledTextarea } from "./style";
import { StyledLabel, StyledLabelText } from "../../globalStyle";

export function Input({title, type, name, handleChange}) {
  return(
    <>
      <StyledLabel>
        <StyledLabelText>
          {title}
        </StyledLabelText>
      {
        type == 'text' ?
        <StyledInput
          name={name}  
          onChange={handleChange}/>
        :
        <StyledTextarea
          name={name}  
          onChange={handleChange}/>
      } 
      </StyledLabel>
    </>
  )
}