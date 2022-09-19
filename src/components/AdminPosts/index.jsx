import { useState } from "react";
import { useEffect } from "react";
import { CardList } from "../CardList";
import { Plus } from "phosphor-react"
import { StyledIcon, StyledMain } from "./styles";
import api from "../../services/api";
import { Drawer } from "../Drawer";
import { Forms } from "../Forms";

export function AdminPosts() {
  const [posts, setPosts] = useState([]) 
  const [showDrawer, setShowDrawer] = useState(false)
  const [form, setForm] = useState(
    {
      userId: '',
      title: '',
      body: ''
    }
  )
  
  useEffect(()=> {    
    async function getPosts() {
      try {
        const result = await api.get('/posts')
        setPosts(result.data)
      }
      catch {
        console.error(err);
      }
    }
    getPosts()
  },[])

  async function createPost() {
    try {
      await api.post('/posts', form)
    }
    catch {
      console.error(err)
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    createPost()
  }

  return(
    <StyledMain>
      {
        posts.map(post => (
          <CardList key={post.id} data={post}/>          
        ))
      }
      {
        showDrawer && 
        <Drawer handleClick={setShowDrawer}>
          <Forms 
           handleChange={handleChange}
           handleSubmit={handleSubmit}
          />
        </Drawer>
      }
      <StyledIcon>
        <Plus
        onClick={()=> setShowDrawer(true)}
        size={60} color='var(--white)' />
      </StyledIcon>
    </StyledMain>
  )
}