import { useEffect, useState } from "react";
import { StyledButton } from "../../globalStyle";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledForm } from "./styles";
import api from "../../services/api";

export function Forms({handleChange, handleSubmit}) {
  const [users, setUsers] = useState([])

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
        title='Título'
        type='text'
        handleChange={handleChange}
        required
      />
      <Input 
        name='body' 
        title='Conteúdo'
        type='textarea' 
        handleChange={handleChange}
        required
      />
      <Select 
        name='userId'
        title='Usuário'
        users={users}
        handleChange={handleChange} 
        required
      />
      <StyledButton>
        Enviar
      </StyledButton>
    </StyledForm>
  )
}