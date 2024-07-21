import React, { useState } from 'react'
import Docstext from './inner-components/docstext'
import Hamburgermodal from './inner-components/hamburgermodal'

function Docs() {

  const [currentModal, setCurrentModal] = useState("Docs Home")

  const [hamburgModal, setHamburgModal] = useState(false)


  function toggleHamburg() {
    setHamburgModal(!hamburgModal)
  }

  return (
    <div className='w-full h-full'>
      <div className='invisible lg:visible lg:fixed lg:top-0 lg:left-0 lg:min-h-screen lg:w-[300px] lg:border-r-[1px] lg:border-[#dfdfdf'>
        <div className='flex flex-col py-8 px-6'>
          <div className='flex flex-col gap-5'>
            <a href='/' className='flex items-center gap-2 text-xl sm:text-2xl xl:text-3xl hover:text-purple-500 duration-200'>
              <div>Music API</div>
              <i className="fa-solid fa-music"></i>
            </a>
            <div className='text-sm sm:text-lg xl:text-xl'>Music API <span className='text-[#3030308d]'>&#47; Docs</span></div>
          </div>
        </div>
        <div className='h-[1px] w-full bg-[#dfdfdf]'></div>
        <div className='flex flex-col border-b-[1px]'>
          <button 
            className={`${currentModal === "Docs Home" ? "font-bold" : "font-medium"} flex items-center h-[50px] px-6 hover:bg-gray-100`}
            onClick={() => setCurrentModal("Docs Home")}
          >Docs Home</button>
          <button 
            className={`${currentModal === "Instructions" ? "font-bold" : "font-medium"} flex items-center h-[50px] px-6 hover:bg-gray-100`}
            onClick={() => setCurrentModal("Instructions")}
          >Instructions</button>
          <button 
            className={`${currentModal === "Endpoints" ? "font-bold" : "font-medium"} flex items-center h-[50px] px-6 hover:bg-gray-100`}
            onClick={() => setCurrentModal("Endpoints")}
          >Endpoints</button>
        </div>
      </div>
      <div className='flex justify-center -mt-[250px] lg:justify-start lg:ml-[400px] lg:my-[100px] mb-3'>
        <Docstext currentModal={currentModal}/>
      </div>
      <button onClick={toggleHamburg} className='visible fixed top-0 right-0 p-5 lg:invisible'>
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
      {hamburgModal && (<Hamburgermodal toggleHamburg={toggleHamburg} setCurrentModal={setCurrentModal} currentModal={currentModal}/>)}
    </div>
  )
}

export default Docs