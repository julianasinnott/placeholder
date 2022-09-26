import { StyledButton } from "../../globalStyle";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledForm } from "./styles";
import { useGetApiData } from "../../hooks/useGetApiData";

export function Forms({handleChange, handleSubmit, data, update, loading}) {
  const defaultValue = update? data.userId : 'default'
  const users = useGetApiData('/users')
  const usersOptions = users.map(user => ({id: user.id, name: user.name}))

  return(
    <StyledForm
      type='submit'
      onSubmit={handleSubmit}
    >
      <Input
        name='title' 
        value={data.title}
        title='Título'
        type='text'
        handleChange={handleChange}
        required
      />
      <Input 
        name='body'
        value={data.body}
        title='Conteúdo'
        type='textarea' 
        handleChange={handleChange}
        required
      />
      <Select 
        name='userId'
        title='Usuário'
        data={usersOptions}
        defaultValue={defaultValue}
        handleChange={handleChange} 
        update={update}
        required
      />
      <StyledButton>
       {loading ? 'Enviando...' : 'Enviar'} 
      </StyledButton>
    </StyledForm>
  )
}