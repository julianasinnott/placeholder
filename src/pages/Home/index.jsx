import { Posts } from "../../components/Posts";
import { Template } from "../../components/template";
import { useGetApiData } from "../../hooks/useGetApiData";

export function Home() {
  const posts = useGetApiData('/posts')

  return(
    <Template>
      <Posts data={posts} />
    </Template>
  )
}