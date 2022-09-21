import { useEffect, useState } from "react";
import { StyledButton } from "../../globalStyle";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledForm } from "./styles";
import api from "../../services/api";

export function Forms({handleChange, handleSubmit, data, update}) {
  const [users, setUsers] = useState([])
  const defaultValue = update? data.userId : 'default'

  useEffect(()=> {
    async function getUsers() {
      try {
        const result = await api.get('/users')
        const usersArray = result.data.map(user => ({id: user.id, name: user.name}))
        setUsers(usersArray)
      }
      catch {
        console.error(err);
      }
    }
    getUsers()
  },[])

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
        data={users}
        defaultValue={defaultValue}
        handleChange={handleChange} 
        update={update}
        required
      />
      <StyledButton>
        Enviar
      </StyledButton>
    </StyledForm>
  )
}