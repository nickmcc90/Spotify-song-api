import React from 'react'

function Navbutton(props) {

  const { title } = props

  return (
    <button className='uppercase hover:opacity-55'>
      {title}
    </button>
  )
}

export default Navbutton