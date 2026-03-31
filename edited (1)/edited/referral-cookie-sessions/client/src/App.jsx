import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Frontpg from "./pages/Frontpg"
import { get, post } from './api'
import Navbar from './pages/Navbar'


import Adoption from "./pages/Adoption/Adoption"
import Report from "./pages/Report/Report"
import Shop from "./pages/Shop/Shop"
import InfoPage from "./pages/InfoPage/InfoPage"
import DogHealth from "./pages/DogHelth/DogHealth"

import DogDetail from "./pages/DogDetail/DogDetail";
import './pages/Navbar.css'



export default function App() {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function init() {
      try {
        const res = await get('/auth/me')
        if (res?.ok) {
          setCurrentUser(res.user)
          localStorage.setItem('user', JSON.stringify(res.user))
        } else {
          setCurrentUser(null)
          localStorage.removeItem('user')
        }
      } catch (e) {
        setCurrentUser(null)
        localStorage.removeItem('user')
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [])

  const logout = async () => {
    try { await post('/auth/logout', {}) } catch {}
    setCurrentUser(null)
    localStorage.removeItem('user')
    navigate('/')
  }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {/* Navbar */}
      <nav id='Navbar1'>
        <Link to="/" style={{ marginRight: 15, color: "white" }}> <div className='image'style={{ width:'60px' }} >
          <img style={{ width:'60px' }} src="/Logo/logo11.png" alt="" />
          <h3> The Paw Story </h3>
          
          </div>   </Link>
        <Navbar/>
        <span style={{ float: "right" }}>
          {!currentUser ? (
            <>
              <Link to="/login" style={{ marginRight: 10, color: "white" }}>Login</Link>
              <Link to="/signup" style={{ color: "white" }}>Signup</Link>
            </>
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </span>
      </nav>

      {/* Routes */}
      <Routes>
        {/* HOME PAGE — OPEN DIRECTLY */}
        <Route path="/" element={<Frontpg />} />

        <Route path="/signup" element={!currentUser ? <Signup setCurrentUser={setCurrentUser} /> : <Navigate to="/" />} />
        <Route path="/login" element={!currentUser ? <Login setCurrentUser={setCurrentUser} /> : <Navigate to="/" />} />

        {/* Catch all → go to home */}
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/adoption" element={<Adoption />} />
  <Route path="/report" element={<Report />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/info" element={<InfoPage />} />
  <Route path="/health" element={<DogHealth />} />
  <Route path="/dog/:id" element={<DogDetail />} />

      </Routes>
    </div>
  )
}
