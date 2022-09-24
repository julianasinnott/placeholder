import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Admin } from './pages/Admin';
import { Home } from './pages/Home';
import { Post } from './pages/Post'
import { User } from './pages/User';

export function PlaceholderRoutes() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="posts/:slug" element={<Post />} />
          <Route path="users/:slug" element={<User />} />
        </Routes>
    </BrowserRouter>
  )
}