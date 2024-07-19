import React from 'react'

function Navbutton(props) {

  const { title } = props

  const routeNav = () => {
    const location = title.replaceAll(' ', '-')
    window.location.href = `#${location}`
  }

  return (
    <button onClick={routeNav} className='uppercase hover:opacity-55 text-xs md:text-sm'>
      {title}
    </button>
  )
}

export default Navbutton