import React, { useRef, useState } from 'react'

function VibeSection() {

  const firstvibe = useRef()
  const secondvibe = useRef()
  const thirdvibe = useRef()

  const [vibe, setVibe] = useState("piano")

  const handleScrollToFirst = () => {
    firstvibe.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })

    setVibe("piano")
  }

  const handleScrollToSecond = () => {
    secondvibe.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    setVibe("tech")
  }

  const handleScrollToThird = () => {
    thirdvibe.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    setVibe("baddy")
  }


  return (
    <div className='flex flex-col max-w-[1000px] mx-auto gap-5 py-[75px]'>
      <div className='flex items-center justify-between flex-nowrap w-[100%]'>
        <div className='flex items-center my-5 mx-auto border border-slate-300 overflow-auto flex-none w-[100%]
        h-[128px] flex-nowrap overflow-y-hidden overflow-x-hidden snap-mandatory snap-x scroll-smooth'>
          <div ref={firstvibe} className='snap-center w-[100%] text-center flex-none'>1</div>
          <div ref={secondvibe} className='snap-center w-[100%] text-center flex-none'>2</div>
          <div ref={thirdvibe} className='snap-center w-[100%] text-center flex-none'>3</div>
        </div>
      </div>
      <div className='flex gap-5 justify-center'>
        <button className={`h-3 w-3 rounded-full ${vibe === "piano" ?  'bg-blue-500' : 'bg-slate-700'}`} 
        onClick={handleScrollToFirst}></button>
        <button className={`h-3 w-3 rounded-full ${vibe === "tech" ?  'bg-green-500' : 'bg-slate-700'}`} 
        onClick={handleScrollToSecond}></button>
        <button className={`h-3 w-3 rounded-full ${vibe === "baddy" ?  'bg-violet-500' : 'bg-slate-700'}`} 
        onClick={handleScrollToThird}></button>
      </div>
    </div>
  )
}

export default VibeSection