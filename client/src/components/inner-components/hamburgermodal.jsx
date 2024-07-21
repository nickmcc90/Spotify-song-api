import React from 'react'

function Hamburgermodal(props) {

  const { toggleHamburg, setCurrentModal, currentModal } = props

  return (
    <div className='fixed top-0 right-0 inset-0 z-10'>
      <div onClick={toggleHamburg} className='inset-0 w-full h-full absolute bg-[#0000007c]'></div>
      <div className='absolute top-0 right-0 w-[200px] bg-white min-h-screen flex flex-col'>
        <button onClick={toggleHamburg} className='w-[25px] p-4'>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <button 
            className={`${currentModal === "Docs Home" ? "font-bold" : "font-medium"} flex items-center h-[50px] px-6 hover:bg-gray-100`}
            onClick={() => {
              setCurrentModal("Docs Home")
              toggleHamburg()
              }}
          >Docs Home</button>
          <button 
            className={`${currentModal === "Instructions" ? "font-bold" : "font-medium"} flex items-center h-[50px] px-6 hover:bg-gray-100`}
            onClick={() => {
              setCurrentModal("Instructions")
              toggleHamburg()
            }}
          >Instructions</button>
          <button 
            className={`${currentModal === "Endpoints" ? "font-bold" : "font-medium"} flex items-center h-[50px] px-6 hover:bg-gray-100`}
            onClick={() => {
              setCurrentModal("Endpoints")
              toggleHamburg()
            }}
          >Endpoints</button>
      </div>
    </div>
  )
}

export default Hamburgermodal