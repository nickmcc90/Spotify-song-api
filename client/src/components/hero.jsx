import React from 'react'
import motivation from '../assets/motivationrun.jpeg'
import bonfire from '../assets/bonfire.jpeg'

function Hero() {
  return (
    <section className='flex flex-col justify-center min-h-screen -mt-3 max-w-[1500px] mx-auto'>
      <div className='flex flex-col gap-[110px] justify-center items-center my-auto max-w-[1500px]'>
        <div className='grid grid-cols-1 place-items-center gap-5 xl:flex xl:items-center xl:justify-between xl:w-[70%]'>
          <div className='text-white text-3xl sm:text-4xl'>
            Motivating music for any occasion.
          </div>
          <img className='aspect-ratio h-[200px]' src={motivation}/>
        </div>
        <div className='grid grid-cols-1 place-items-center gap-5 xl:flex xl:items-center xl:justify-between xl:w-[70%]'>
          <img className='aspect-ratio object-cover object-top h-[300px]' src={bonfire}/>
          <div className='text-white text-3xl sm:text-4xl xl:w-[35%]'>
            Gym, hype-sesh, pregame, you name it.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero