import { useEffect, useState } from "react"
import { Card } from "../Card"
import { PostsSection } from "./styles"
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
    </PostsSection>
  )
}