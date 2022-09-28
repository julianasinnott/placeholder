import { Posts } from "../../components/Posts";
import { Template } from "../../components/template";
import { StyledDiv, StyledTitle } from "../../globalStyle";
import { useGetApiData } from "../../hooks/useGetApiData";

export function Home() {
  const posts = useGetApiData('/posts')

  return(
    <Template paddingMobile='10px'>
      <StyledDiv padding='40px 20px'>
        <StyledTitle margin800px='20px'>
          Placeholder Posts
        </StyledTitle>
        <Posts data={posts} width900px='100%' />
      </StyledDiv>
    </Template>
  )
}