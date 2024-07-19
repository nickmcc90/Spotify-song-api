import React from 'react'
import Navbutton from './inner-components/navbutton'

function Navbar() {

  const navlinks = ['Status Check', 'About', 'Updates', 'Vibes', 'Payment Plans']

  return (
    <nav className='flex justify-between items-center p-5 text-white'>
      <div className='flex items-center gap-2 text-lg sm:text-xl xl:text-2xl'>
        <div>Music API</div>
        <i className="fa-solid fa-music"></i>
      </div>
      <div className='flex gap-2 md:gap-4'>
        {navlinks.map((item, itemIndex) => {
          return(
            <Navbutton key={itemIndex} title={item}/>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar