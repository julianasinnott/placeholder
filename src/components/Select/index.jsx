import { StyledLabel, StyledLabelText } from "../../globalStyle";
import { StyledSelect } from "./style";

export function Select({title, name, defaultValue, handleChange, data}) {

  return(
    <>
    <StyledLabel>
      <StyledLabelText>
        {title}
      </StyledLabelText>
      <StyledSelect
        defaultValue={defaultValue}
        name={name}
        onChange={handleChange}
      >
        <option value='default' disabled>
           Selecione...
        </option>
        {
          data.map(data => (
            <option
              value={data.id}
              key={data.id}
            >
              {data.name}
            </option>
          ))
        }       
      </StyledSelect>
    </StyledLabel>
    </>
  )
}