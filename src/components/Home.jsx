import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Registration from './Registration'

const Home = () => {
    const navigate=useNavigate()

 const handleClick=()=>{
        navigate('/register')
    }
  return (
    <div>
      <h2>This is a Home Page</h2>
      <button onClick={handleClick}>Sign Up</button>
      {/* <Link to='/register'>Sign</Link> */}
    </div>
  )
}

export default Home
