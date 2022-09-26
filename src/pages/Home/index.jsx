import { Posts } from "../../components/Posts";
import { Template } from "../../components/template";
import { StyledDiv, StyledTitle } from "../../globalStyle";
import { useGetApiData } from "../../hooks/useGetApiData";

export function Home() {
  const posts = useGetApiData('/posts')

  return(
    <Template>
      <StyledDiv>
        <StyledTitle>
          Placeholder Posts
        </StyledTitle>
        <Posts data={posts} />
      </StyledDiv>
    </Template>
  )
}