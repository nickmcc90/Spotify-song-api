import React from 'react'

function StatusCheck() {
  return (
    <div className='h-[250px] bg-[#2e2860] w-full'>
      <div className='flex flex-col items-center justify-center text-white p-4 gap-5'>
        <div className='flex flex-col gap-1 items-center'>
          <h1 className='text-2xl sm:text-3xl xl-4xl font-bold uppercase'>Check Key Status</h1>
          <div>Please enter your API key below to check its status.</div>
          <div className='flex gap-2 items-center'>
            <div className='text-[#3cafe4]'>Example Key</div>
            <div>alksdjfSDK3edkjsADDD</div>
          </div>
        </div>
        <div className='flex justify-around w-[50%]'>
          <input placeholder='Enter API Key...' className='w-[50%] xl:w-[80%] rounded-full p-3 text-black'/>
          <button className='bg-[#5147a5] p-2 rounded-xl hover:opacity-65'>Check Status</button>
        </div>
        {/* This is the room to render variable status statements */}
      </div>
    </div>
  )
}

export default StatusCheck