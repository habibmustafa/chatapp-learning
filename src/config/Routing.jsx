import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routing = () => {
  return (
   <>
      <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
   </>
  )
}

export default Routing