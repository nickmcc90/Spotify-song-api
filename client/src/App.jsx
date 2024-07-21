import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Success from './components/success'
import Cancel from './components/cancel'
import TotalPage from './totalpage'
import Docs from './components/docs'

function App() {

  const [backendData, setbackendData] = useState([{}])

  const [vibeCheckout, setVibeCheckout] = useState(null)


  return (
    <>
      <Routes>
        <Route path='/' index element={<TotalPage vibeCheckout={vibeCheckout} setVibeCheckout={setVibeCheckout}/>}/>
        <Route path='/success' element={<Success />}/>
        <Route path='/cancel' element={<Cancel />}/>
        <Route path='/docs' element={<Docs />}/>
      </Routes>
    </>
  )
}

export default App