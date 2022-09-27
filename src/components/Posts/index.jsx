import { Card } from "../Card"
import { PostsSection } from "./styles"

export function Posts({data, width1130px, width900px}) { 
  return(
    <PostsSection>
      {
        data.map(data => (
          <Card key={data.id} data={data} width1130px={width1130px} width900px={width900px} />          
        ))
      }
    </PostsSection>
  )
}