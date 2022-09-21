import { StyledInput, StyledTextarea } from "./style";
import { StyledLabel, StyledLabelText } from "../../globalStyle";

export function Input({title, type, name, handleChange, value}) {
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
          value={value} 
          onChange={handleChange}/>
        :
        <StyledTextarea
          name={name}  
          value={value}
          onChange={handleChange}/>
      } 
      </StyledLabel>
    </>
  )
}