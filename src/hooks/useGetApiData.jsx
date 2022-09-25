import { useState, useEffect } from "react"
import api from "../services/api"

export function useGetApiData(url) {
  const [data, setData] = useState([]) 
  
  useEffect(()=> {    
    async function getData() {
      try {
        const result = await api.get(url)
        result.data && setData(result.data)
      }
      catch {
        console.error(err);
      }
    }
    getData()
  },[])

  return data
}