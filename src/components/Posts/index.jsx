import { useEffect, useState } from "react"
import { Card } from "../Card"
import { Plus } from "phosphor-react"
import { PostsSection, StyledIcon } from "./styles"
import api from "../../services/api"

export function Posts() { 
  const [posts, setPosts] = useState([]) 
  
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
    <PostsSection>
      {
        posts.map(post => (
          <Card key={post.id} data={post}/>          
        ))
      }
      <StyledIcon>
        <Plus size={60} color='var(--white)'  />
      </StyledIcon>
    </PostsSection>
  )
}