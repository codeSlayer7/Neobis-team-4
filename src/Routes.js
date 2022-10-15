import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/auth/SignIn'
import Home from './pages/Home'
import Register from './pages/Register'

function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes