import { useState } from "react";
import { useEffect } from "react";
import { CardList } from "../CardList";
import { Plus } from "phosphor-react"
import { StyledIcon, StyledMain } from "./styles";
import api from "../../services/api";
import { Drawer } from "../Drawer";
import { Form } from "react-router-dom";
import { Forms } from "../Forms";

export function AdminPosts() {
  const [posts, setPosts] = useState([]) 
  const [showDrawer, setShowDrawer] = useState(false)
  
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
          <Forms />
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