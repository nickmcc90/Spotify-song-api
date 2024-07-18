import React from 'react'

function ColorChanger(props) {

  const { children, vibeCheckout } = props

  return (
    <>
      {vibeCheckout === null && (
        <div className='bg-gradient-to-b from-[#000000] from-10% via-[#170a35] via-60% to-[#421e97] min-h-screen w-full'>
          {children}
        </div>
      )}
      {vibeCheckout === "piano" && (
        <div className='bg-gradient-to-b from-[#000000] from-10% via-[#0a124a] via-60% to-blue-500 min-h-screen w-full'>
          {children}
        </div>
      )}
      {vibeCheckout === "tech" && (
        <div className='bg-gradient-to-b from-[#000000] from-10% via-[#013a07] via-60% to-green-500 min-h-screen w-full'>
          {children}
        </div>
      )}
      {vibeCheckout === "80s" && (
        <div className='bg-gradient-to-b from-[#000000] from-10% via-[#3c074a] via-60% to-[#c32bff] min-h-screen w-full'>
          {children}
        </div>
      )}
    </>
  )
}

export default ColorChanger