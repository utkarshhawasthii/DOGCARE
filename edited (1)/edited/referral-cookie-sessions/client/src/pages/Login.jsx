import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from '../api'

export default function Login({ setCurrentUser }) {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const doLogin = async () => {
    try {
      const res = await post('/auth/login', { phone, password })
      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(res.user))
        setCurrentUser(res.user)
        alert('Logged in successfully!')
        navigate('/dashboard')
      } else {
        alert(res.message || 'Login failed')
      }
    } catch (err) {
      console.error('Login error:', err)
      alert('Something went wrong, please try again')
    }
  }

  return (
    <div className='login' >
      <h3>Login</h3>
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      /><br />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button className='loginbtn' onClick={doLogin}>Login</button>
    </div>
  )
}
