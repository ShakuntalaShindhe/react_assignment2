import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/home')
    }

  return (
    <div className='Container'>
      <form onSubmit={handleSubmit}>
        <div  className='Details-cont'>
        <label>Email:</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label>Password:</label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
