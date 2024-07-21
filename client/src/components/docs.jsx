import React, { useState } from 'react'
import Docstext from './inner-components/docstext'

function Docs() {

  const [currentModal, setCurrentModal] = useState("Docs Home")

  return (
    <div className=''>
      <div className='fixed top-0 left-0 min-h-screen w-[300px]  border-r-[1px] border-[#dfdfdf'>
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
      <div className='ml-[400px] my-[100px]'>
        <Docstext currentModal={currentModal}/>
      </div>
    </div>
  )
}

export default Docs