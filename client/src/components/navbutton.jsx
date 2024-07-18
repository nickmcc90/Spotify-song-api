import React from 'react'

function Navbutton(props) {

  const { title } = props

  return (
    <button className='uppercase hover:opacity-55 text-xs md:text-sm'>
      {title}
    </button>
  )
}

export default Navbutton