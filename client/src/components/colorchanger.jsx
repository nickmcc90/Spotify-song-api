import React from 'react'

function ColorChanger(props) {

  const { children, vibeCheckout } = props

  // this is atrocious
  // I could possibly store these string values in a useState variable to clean things up
  // Explanation:
  // If the customer HASN'T chosen a product yet -> the gradient background is standard purple.
  // Then, using conditional statments......
  // Based on the product the customer chose -> the gradient is selected.

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