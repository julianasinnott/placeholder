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
  const [successMessage, setSuccessMessage] = useState(false)
  const [postId, setPostId] = useState('')
  const [update, setUpdate] = useState(false)
  const [loading, setLoading] = useState('')
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
    setLoading(true)
    try {
      await api.post('/posts', form)
      setSuccessMessage(true)
    }
    catch {
      console.error(err)
    }
    finally {
      setLoading(false)
      setShowDrawer(false)
      setShowConfirmModal(true)
      setTimeout(() => {
        setShowConfirmModal(false);
        setSuccessMessage(false)
      }, 3000);
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
    setLoading(true)
    try {
      await api.put(`/posts/${postId}`, form)
      setSuccessMessage(true)
    }
    catch (err) {
      console.error(err);
    }
    finally {
      setLoading(false)
      setShowDrawer(false)
      setShowConfirmModal(true)
      setTimeout(() => {
        setShowConfirmModal(false);
        setSuccessMessage(false)
      }, 3000);
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
      update ? updatePost() : createPost()
    }

    return(
      <StyledMain>
      {
        showConfirmModal &&
        <ConfirmModal
          horizontalPosition={successMessage ? "calc(50% - 200px)" : "calc(50% - 150px)"}
          titleModal={successMessage? 'Enviado com sucesso!' : 'Excluir Post?'}
          Xicon={successMessage? false : true}
          closeModal={handleClick}
          confirmDeleteItem={!successMessage ? deletePost : undefined}
        />
      }
      {
        posts.map(post => (
          <CardList
            key={post.id}
            data={post}
            setShowDrawer={setShowDrawer}
            deletePost={handleClick}
            setForm={setForm}
            setUpdate={setUpdate}
            setPostId={setPostId} 
          />          
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
            loading={loading}
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