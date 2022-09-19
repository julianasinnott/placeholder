import { StyledLabel, StyledLabelText } from "../../globalStyle";
import { StyledSelect } from "./style";

export function Select({title, name, handleChange, users}) {
  return(
    <>
    <StyledLabel>
      <StyledLabelText>
        {title}
      </StyledLabelText>
      <StyledSelect
        defaultValue='Usuário'
        name={name}
        onChange={handleChange}
      >
        <option value='Usuário' disabled>
          Usuário
        </option>
        {
          users.map(user => (
            <option
              value={user.id}
              key={user.id}
            >
              {user.name}
            </option>
          ))
        }       
      </StyledSelect>
    </StyledLabel>
    </>
  )
}