import React from 'react'

function Cancel() {
  return (
    <div className='bg-gradient-to-t from-[#000000] from-10% via-[#170a35] via-60% to-[#421e97] min-h-screen w-full mx-auto pb-8 text-white'>
    <div className='flex flex-col justify-center items-center gap-5 pt-10'>
      <div>Sorry about the cancellation!</div>
      <a className='underline hover:opacity-65' href='/'>Back home</a>
    </div>
  </div>
  )
}

export default Cancel