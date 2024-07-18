import React, { useRef, useState } from 'react'


function VibeSection() {

  const firstvibe = useRef()
  const secondvibe = useRef()
  const thirdvibe = useRef()

  const [vibeTile, setVibeTile] = useState("piano")

  const handleScrollToFirst = () => {
    firstvibe.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })

    setVibeTile("piano")
  }

  const handleScrollToSecond = () => {
    secondvibe.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    setVibeTile("tech")
  }

  const handleScrollToThird = () => {
    thirdvibe.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    setVibeTile("baddy")
  }


  return (
    <div className='flex flex-col max-w-[400px] mx-auto gap-5 py-[75px]'>
      <div className='uppercase flex justify-center text-2xl sm:text-3xl xl-4xl font-bold text-white'>Choose your vibe</div>
      <div className='flex items-center justify-between flex-nowrap w-[100%]'>
        <div className='flex items-center my-5 mx-auto border overflow-auto flex-none w-[100%]
        h-[400px] flex-nowrap overflow-y-hidden overflow-x-hidden snap-mandatory snap-x scroll-smooth
        bg-black'>

          <div ref={firstvibe} className='snap-center w-[100%] text-center flex-none text-white'>
            <div className="uppercase text-blue-500 text-3xl sm:text-4xl xl:text-5xl font-semibold py-6">
              Piano
            </div>
            <div className='font-thin mt-6 text-lg'>
              <div>Melodic upbeat chord progressions</div>
              <div>Interesting funky rhythms</div>
            </div>
            <div className='py-6 text-lg'>
              <div className='font-semibold'>Think:</div>
              <div className='font-thin'>
                <div>Club</div>
                <div>Workout</div>
              </div>
            </div>
          </div>

          <div ref={secondvibe} className='snap-center w-[100%] text-center flex-none text-white flex-col'>
            <div className="uppercase text-green-500 text-3xl sm:text-4xl xl:text-5xl font-semibold py-6">
              Tech House
            </div>
            <div className='font-thin mt-6 text-lg'>
              <div>Crisp sound design</div>
              <div>Pleasant unorthodox melodies</div>
              <div>Hard hitting tempo</div>
            </div>
            <div className='py-6 text-lg'>
              <div className='font-semibold'>Think:</div>
              <div className='font-thin'>
                <div>Club</div>
                <div>Workout</div>
              </div>
            </div>
          </div>

          <div ref={thirdvibe} className='snap-center w-[100%] text-center flex-none text-white flex-col'>
            <div className="text-[#c32bff] text-3xl sm:text-4xl xl:text-5xl font-semibold py-6">
              80s JAMS
            </div>
            <div className='font-thin mt-6 text-lg'>
              <div>Classic band sound</div>
              <div>Beautiful instrumentals</div>
            </div>
            <div className='py-6 text-lg'>
              <div className='font-semibold'>Think:</div>
              <div className='font-thin'>
                <div>Get-togethers</div>
                <div>Party songs</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='flex gap-5 justify-center'>
        <button className={`h-3 w-3 rounded-full ${vibeTile === "piano" ?  'bg-blue-500' : 'bg-slate-700'}`} 
        onClick={handleScrollToFirst}></button>
        <button className={`h-3 w-3 rounded-full ${vibeTile === "tech" ?  'bg-green-500' : 'bg-slate-700'}`} 
        onClick={handleScrollToSecond}></button>
        <button className={`h-3 w-3 rounded-full ${vibeTile === "baddy" ?  'bg-[#c32bff]' : 'bg-slate-700'}`} 
        onClick={handleScrollToThird}></button>
      </div>
    </div>
  )
}

export default VibeSection