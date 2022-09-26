import { Card } from "../Card"
import { PostsSection } from "./styles"

export function Posts({data}) { 
  return(
    <PostsSection>
      {
        data.map(data => (
          <Card key={data.id} data={data}/>          
        ))
      }
    </PostsSection>
  )
}