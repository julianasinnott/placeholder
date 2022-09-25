import { Posts } from "../../components/Posts";
import { Template } from "../../components/template";
import { useEffect, useState } from "react"
import api from "../../services/api";

export function Home() {
  const [posts, setPosts] = useState('') 
  
  useEffect(()=> {    
    async function getPosts() {
      try {
        const result = await api.get('/posts')
        setPosts(result.data)
        console.log(result.data)
      }
      catch {
        console.error(err);
      }
    }
    getPosts()
  },[])
  console.log(posts)
  return(
    <>
    <Template>
      {
        posts && <Posts data={posts} />
      }
    </Template>
    </>
  )
}