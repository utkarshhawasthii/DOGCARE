import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from '../api'
import '../pages/SignupLogin.css'

export default function Signup({ setCurrentUser }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [referralCode, setReferralCode] = useState('')
  const navigate = useNavigate()

  const doSignup = async () => {
    try {
      const res = await post('/auth/signup', { name, phone, password, referralCode })

      if (res.ok) {
        // ✅ Session already set by backend (no need to call login again if backend sets session on signup)
        localStorage.setItem('user', JSON.stringify(res.user))
        setCurrentUser(res.user)
        alert('Signup successful! Logged in.')
        navigate('/dashboard')
      } else {
        alert(res.message || 'Signup failed')
      }
    } catch (err) {
      console.error('Signup error:', err)
      alert('Something went wrong, please try again')
    }
  }

  return (
    <>
      <div  id="Signup">
        <h3>Signup</h3>
        <input
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
     
        <input
          placeholder="Phone (with country code e.g. +919999...)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
        <button className='signupbtn' onClick={doSignup}>Signup</button>
      </div>
    </>
  )
}
