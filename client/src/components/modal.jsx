import React from 'react'

function Modal(props) {

  const { cancelSubscription, modalShowing } = props

  return (
    <div className='fixed inset-0 z-10 flex flex-col justify-center items-center'>
      <div className='inset-0 w-full h-full absolute bg-[#0000007c]'></div>
      <div className='bg-white text-black flex flex-col items-center text-center gap-8 z-[100] w-[300px] p-5'>
        <div>Are you sure you want to cancel your subscription?</div>
        <div className='flex gap-10'>
          <button onClick={() => {
            cancelSubscription()
            modalShowing()
          }} className='border border-black p-1 hover:bg-black hover:text-white'>Yes</button>
          <button onClick={modalShowing} className='border border-black p-1 hover:bg-black hover:text-white'>Never mind</button>
        </div>
      </div>
    </div>
  )
}

export default Modal