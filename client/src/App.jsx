import React from 'react'
import { useState, useEffect } from 'react'
import Hero from './components/hero'
import Navbar from './components/navbar'
import StatusCheck from './components/statuscheck'

function App() {

  const [backendData, setbackendData] = useState([{}])

  useEffect(() => {
    async function grabBackend() {
      const res = await fetch('http://localhost:5000/api')
      const data = await res.json()
      setbackendData(data)
    }
    grabBackend()
  }, [])

  return (
    <div className='bg-gradient-to-t from-[#000000] from-10% via-[#170a35] via-60% to-[#421e97] min-h-screen w-full'>
      <Navbar />
      <Hero />
      <StatusCheck />
    </div>
  )
}

export default App