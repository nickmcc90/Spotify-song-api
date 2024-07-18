import React from 'react'

function Updates() {
  return (
    <div className='flex items-center w-[85%] mx-auto h-[300px] justify-center gap-7'>
      <i className="fa-solid fa-microchip text-2xl sm:text-3xl text-green-500"></i>
      <div className='flex flex-col gap-5 bg-slate-700 justify-center items-center text-white py-10 max-w-[1000px] w-[80%] h-[300px] rounded-xl'>
        <div className='font-light'>Introducing a new vibe....</div>
        <div className='flex justify-center items-center bg-black w-full py-5'>
          <div className='text-2xl sm:text-3xl xl-4xl font-bold uppercase text-green-600'>Tech House Vibe</div>
        </div>
        <div className='font-light'>More vibes coming soon.</div>
      </div>
      <i className="fa-solid fa-microchip text-2xl sm:text-3xl text-green-500"></i>
    </div>

  )
}

export default Updates