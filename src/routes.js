import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Admin } from './pages/Admin';
import { Home } from './pages/Home';

export function PlaceholderRoutes() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
    </BrowserRouter>
  )
}