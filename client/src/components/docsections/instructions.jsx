import React from 'react'
import first from '../../assets/firstpicture.png'
import second from '../../assets/second.png'

function Instructions() {
  return (
    <div className='flex flex-col gap-6 max-w-[550px] px-4'>
      <div className='text-xl sm:text-2xl xl:text-3xl font-bold'>
          Preparing Your Computer to Use Music API
      </div>
      <div className='flex flex-col gap-3'>
        <div className='font-semibold text-lg'>Where the heck do I even start?</div>
        <div className='font-thin text-lg leading-[25px]'>
          First, make sure that you have VS Code installed on your computer. Once that
          is done, make sure your screen looks like this:
        </div>
        <img className='my-3' src={first} />
        <div className='font-thin text-lg leading-[25px]'>
          This is just the starting screen. We are going to want to make a new file
          and name it test.rest.
        </div>
        <img className='my-3' src={second} />
      </div>
      <div className='flex flex-col gap-3'>
        <div className='font-semibold text-lg'>Making the API call</div>
        <div className='font-thin text-lg leading-[25px]'>
          Once the file is made, you are ready to make the api calls! Checkout
          the Endpoints section to see where in the API you can make specific calls.
        </div>
      </div>
    </div>
  )
}

export default Instructions