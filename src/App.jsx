import React from 'react'
import DynamicRating from './components/DynamicRating'
import './App.css';
import DynamicAccordian from './components/Accordians';
import Tableanother from './components/Tableanother';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <DynamicRating />
      <DynamicAccordian />
      <Tableanother />

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
