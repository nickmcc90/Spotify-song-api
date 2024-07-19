import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Success() {

  const [searchParams, setSearchParams] = useSearchParams()

  const api_key = searchParams.get('api_key')

  console.log(api_key)

  return (
    <div className='bg-gradient-to-t from-[#000000] from-10% via-[#170a35] via-60% to-[#421e97] min-h-screen w-full mx-auto pb-8 text-white'>
      <div className='flex flex-col justify-center items-center gap-5 pt-10'>
        <div>Here is your API key!</div>
        <div>Copy this and store it in a safe place.</div>
        <div>{api_key}</div>
        <a className='underline hover:opacity-65' href='/'>Back home</a>
      </div>
    </div>
  )
}

export default Success