import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Success from './components/success'
import Cancel from './components/cancel'
import TotalPage from './totalpage'
import Docs from './components/docs'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' index element={<TotalPage />}/>
        <Route path='/success' element={<Success />}/>
        <Route path='/cancel' element={<Cancel />}/>
        <Route path='/docs' element={<Docs />}/>
      </Routes>
    </>
  )
}

export default App