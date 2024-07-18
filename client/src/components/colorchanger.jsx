import React from 'react'

function ColorChanger(props) {

  const { children, vibeCheckout } = props

  // this looks confusing, but we need many conditionals for only the colors to render and not reload everything inside the component.

  return (
    <>
      <div 
        className={`
          ${vibeCheckout === null ? "bg-gradient-to-b from-[#000000] from-10% via-[#170a35] via-60% to-[#421e97] min-h-screen w-full" : (
            vibeCheckout === "piano" ? "bg-gradient-to-b from-[#000000] from-10% via-[#052549] via-60% to-blue-500 min-h-screen w-full" : (
             vibeCheckout === "tech" ? "bg-gradient-to-b from-[#000000] from-10% via-[#073b16] via-60% to-green-500 min-h-screen w-full" : (
              vibeCheckout === "80s" ? "bg-gradient-to-b from-[#000000] from-10% via-[#410e55] via-60% to-[#c32bff] min-h-screen w-full" : ""
             )
            )
          )}
        `}
      >
        {children}
      </div>
    </>
  )
}

export default ColorChanger