import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TotalPage from './totalpage'
import Docs from './components/docs'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' index element={<TotalPage />}/>
        <Route path='/docs' element={<Docs />}/>
      </Routes>
    </>
  )
}

export default App