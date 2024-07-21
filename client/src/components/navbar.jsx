import React from 'react'
import Navbutton from './inner-components/navbutton'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const navlinks = ['Status Check', 'About', 'Updates', 'Vibes', 'Payment Plans']

  return (
    <nav className='flex justify-between items-start p-5 text-white'>
      <div className='flex flex-col gap-2 items-start'>
        <div className='flex items-center gap-2 text-lg sm:text-xl xl:text-2xl'>
          <div>Music API</div>
          <i className="fa-solid fa-music"></i>
        </div>
        <NavLink to='/docs'>
          <button className='flex gap-2 items-center bg-blue-950 text-green-400 p-2 rounded-xl -ml-2
          hover:opacity-75'>
            <div>Docs</div>
            <i class="fa-solid fa-book"></i>
          </button>
        </NavLink>
      </div>
      <div className='flex gap-2 md:gap-4 mt-1'>
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