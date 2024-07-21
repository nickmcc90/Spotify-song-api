import React from 'react'
import third from '../../assets/third.png'
import fourth from '../../assets/fourth.png'
import fifth from '../../assets/fifth.png'
import sixth from '../../assets/sixth.png'
import seventh from '../../assets/seventh.png'
import eighth from '../../assets/eighth.png'

function Endpoints() {
  return (
    <div className='flex flex-col gap-6 max-w-[700px] px-4'>
      <div className='text-xl sm:text-2xl xl:text-3xl font-bold'>
          Endpoints
      </div>
      <div className='flex flex-col gap-3'>
        <div className='font-semibold text-lg text-blue-700'>Song retrival</div>
        <div className='font-thin text-lg leading-[25px]'>
        GET http://localhost:5000/api?api_key=
        </div>
        <div className='text-xs'>If I were to put this server online... 
        the server domain wouldn't be localhost.</div>
      </div>
      <div className='flex flex-col gap-3 width-[550px]'>
        <div className='font-semibold text-lg'>Possible Responses</div>
        <i className='font-thin text-lg leading-[25px] mb-4'>
          Examples are provided using a key that is no longer in use within the database.
        </i>
        <div className='font-thin text-lg'>1&#x2e; No entry after request&#x3A;</div>
        <div className='flex flex-col gap-2 mb-4'>
          <img className='aspect-ratio w-[600px] ' src={third}/>
          <img className='aspect-ratio w-[600px]' src={fourth}/>
        </div>
        <div className='font-thin text-lg'>2&#x2e; Random key, invalid key, random input&#x3A;</div>
        <div className='flex flex-col gap-2 mb-4'>
          <img className='aspect-ratio w-[600px]' src={fifth}/>
          <img className='aspect-ratio w-[600px]' src={sixth}/>
        </div>
        <div className='font-thin text-lg'>3&#x2e; Correct usage of endpoint&#x3A;</div>
        <div className='flex flex-col gap-2'>
          <img className='aspect-ratio w-[600px]' src={seventh}/>
          <img className='aspect-ratio w-[600px]' src={eighth}/>
        </div>
      </div>
    </div>
  )
}

export default Endpoints