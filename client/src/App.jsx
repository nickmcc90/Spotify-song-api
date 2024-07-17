import React from 'react'
import { useState, useEffect } from 'react'

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
    <div className='uppercase border border-slate-500'>
      <div>Here is the listed data:</div>
      <div>{backendData.message}</div>
    </div>
  )
}

export default App