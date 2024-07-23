import React, { useRef, useState } from 'react'


function VibeSection(props) {

  /* these three useRef variables track the locations in horizontal space of 
  my three vibe cards that customers can choose from
  */
  const firstvibe = useRef()
  const secondvibe = useRef()
  const thirdvibe = useRef()


  // Grabbing variable from <Totalpage> for use in higher directory.
  const { vibeCheckout, setVibeCheckout } = props

  /* This variable makes the circle buttons beneath the vibe
  selection window light up or go gray when clicked or clicked off */
  const [vibeTile, setVibeTile] = useState("piano")

  /* These three arrow functions below have to do with the 
  useRef variables that were assigned above:
  1. Each arrow function is assigned to the onClick
  functionality of each of the light-up circle buttons below
  the sliding window.
  2. Each of the cards within the sliding window is
  assigned a useRef variable that tracks the horizontal
  location of that card.
  3. When we click a light-up-circle button,
  the card in the sliding window associated with
  that light-up circle button will scroll into view.*/
  const handleScrollToFirst = () => {
    firstvibe.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    // This variable lets the light-up circle button know
    // to light up when we click it.
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
    setVibeTile("80s")
  }



  return (
    <>
      {/* The biggest container known to man */}
      <div id="Vibes" className='flex flex-col max-w-[400px] mx-auto gap-5 py-[75px]'>
        <div className='uppercase flex justify-center text-2xl sm:text-3xl xl-4xl font-bold text-white'>Choose your vibe</div>
        {/* Here, we create the illusion of only one card showing, but overflow-x-hidden and flex-
        nowrap help hide everything. The snap parameters help out the functionality of the light-up
        buttons*/}
        <div className='flex items-center my-5 mx-auto border overflow-auto flex-none w-[100%]
        h-[400px] flex-nowrap overflow-y-hidden overflow-x-hidden snap-mandatory snap-x scroll-smooth
        bg-black'>
          {/* First vibe card */}
          <div ref={firstvibe} className='snap-center w-[100%] text-center flex-none text-white flex-col'>
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
            {/* If we click the button twice, it reverts back to not being selected */}
            <button className={`border py-2 px-4 hover:bg-white hover:text-black 
            duration-300` + ` ${vibeCheckout === "piano" ? "border-blue-500 text-blue-500" : "border-white text-white"}`}
              onClick={() => vibeCheckout === "piano" ? setVibeCheckout(null) : setVibeCheckout("piano")}
            >
              {vibeCheckout === "piano" ? "Selected." : "Select ?"}
            </button>
          </div>
          {/* Second vibe card */}
          <div ref={secondvibe} className='snap-center w-[100%] text-center flex-none text-white flex-col'>
            <div className="uppercase text-green-500 text-3xl sm:text-4xl xl:text-5xl font-semibold py-6">
              Tech House
            </div>
            <div className='font-thin mt-6 text-lg'>
              <div>Crisp sound design</div>
              <div>Pleasant unorthodox melodies</div>
            </div>
            <div className='py-6 text-lg'>
              <div className='font-semibold'>Think:</div>
              <div className='font-thin'>
                <div>Club</div>
                <div>Workout</div>
              </div>
            </div>
            <button className={`border py-2 px-4 hover:bg-white hover:text-black 
            duration-300` + ` ${vibeCheckout === "tech" ? "border-green-500 text-green-500" : "border-white text-white"}`}
              onClick={() => vibeCheckout === "tech" ? setVibeCheckout(null) : setVibeCheckout("tech")}
            >
              {vibeCheckout === "tech" ? "Selected." : "Select ?"}
            </button>
          </div>
          {/* Third vibe card */}
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
            <button className={`border py-2 px-4 hover:bg-white hover:text-black 
            duration-300` + ` ${vibeCheckout === "80s" ? "border-[#c32bff] text-[#c32bff]" : "border-white text-white"}`}
              onClick={() => vibeCheckout === "80s" ? setVibeCheckout(null) : setVibeCheckout("80s")}
            >
              {vibeCheckout === "80s" ? "Selected." : "Select ?"}
            </button>
          </div>
        </div>
        {/* This div contains the three light-up circle buttons. */}
        <div className='flex gap-5 justify-center'>
          <button className={`h-3 w-3 rounded-full ${vibeTile === "piano" ?  'bg-blue-500' : 'bg-slate-700'}`} 
          onClick={handleScrollToFirst}></button>
          <button className={`h-3 w-3 rounded-full ${vibeTile === "tech" ?  'bg-green-500' : 'bg-slate-700'}`} 
          onClick={handleScrollToSecond}></button>
          <button className={`h-3 w-3 rounded-full ${vibeTile === "80s" ?  'bg-[#c32bff]' : 'bg-slate-700'}`} 
          onClick={handleScrollToThird}></button>
        </div>
      </div>
    </>
  )
}

export default VibeSection