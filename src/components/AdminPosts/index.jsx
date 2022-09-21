import { useState } from "react";
import { useEffect } from "react";
import { CardList } from "../CardList";
import { Plus } from "phosphor-react"
import { StyledIcon, StyledMain } from "./styles";
import api from "../../services/api";
import { Drawer } from "../Drawer";
import { Forms } from "../Forms";
import { ConfirmModal } from "../ConfirmModal";

export function AdminPosts() {
  const [posts, setPosts] = useState([]) 
  const [showDrawer, setShowDrawer] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [postId, setPostId] = useState('')
  const [update, setUpdate] = useState(false)
  const [form, setForm] = useState(
    {
      userId: '',
      title: '',
      body: ''
    }
  )
  
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

  async function createPost() {
    try {
      await api.post('/posts', form)
    }
    catch {
      console.error(err)
    }
  }

  async function deletePost() {
    try {
      await api.delete(`/posts/${postId}`)
      setShowConfirmModal(!showConfirmModal)
    }
    catch (err) {
      console.error(err);
    }
  }

  async function updatePost() {
    try {
      await api.put(`/posts/${postId}`, form)
    }
    catch (err) {
      console.error(err);
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  
  function handleClick(id) {
    setShowConfirmModal(!showConfirmModal)
    setPostId(id)
  }
  
  function handlePlusIconClick() {
    setShowDrawer(true)
    setUpdate(false)
    setForm(
      {
        userId: '',
        title: '',
        body: ''
      }
      )
    }
    
    function handleSubmit(e) {
      e.preventDefault()
      update ? 
        updatePost()
      :      
        createPost()
    }

    return(
      <StyledMain>
      {
        showConfirmModal &&
        <ConfirmModal titleModal='Post' closeModal={handleClick} confirmDeleteItem={deletePost}/>
      }
      {
        posts.map(post => (
          <CardList key={post.id} data={post} setShowDrawer={setShowDrawer} deletePost={handleClick} setForm={setForm} setUpdate={setUpdate} setPostId={setPostId} />          
        ))
      }
      {
        showDrawer && 
        <Drawer handleClick={setShowDrawer}>
          <Forms 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            data={form}
            update={update}
          />
        </Drawer>
      }
      <StyledIcon>
        <Plus
          onClick={handlePlusIconClick}
          size={60} color='var(--white)'
        />
      </StyledIcon>
    </StyledMain>
  )
}