import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Template } from '../../components/Template'
import api from "../../services/api"

export function User() {
  const { slug } = useParams()

  useEffect(()=> {
    async function getPost() {
      try {
        const user = await api.get(`/users/${slug}`)
        const posts = await api.get(`/users/${slug}/posts`)        
      }
      catch {
        console.error(err)
      }
    }
    getPost()
  }, [])
  return(
    <Template>
    </Template>
  )
}