import React, { useState } from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem('userName',username)
        localStorage.setItem('email',email)
        localStorage.setItem('Password',password)
        alert('Stored in localStorage...')
        navigate('/login')
    }
  return (
    <div className='Container'>
      <form onSubmit={handleSubmit}>
        <div className='Details-cont'>
            <h3 style={{textAlign:'center',fontSize:'24px', color:'#0056b3'}}>Sign Up</h3>
        <label>Username:</label>
        <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)}  className='details'/>
        <label>Email:</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}  className='details' />
        <label>Password:</label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  className='details' />
        <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Registration
