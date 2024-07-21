import React from 'react'
import WorkTiles from './inner-components/worktiles'

function HowItWorks() {

  const steps = ["01", "02", "03"]
  const headers = ["Vibe select", "Plan select", "Checkout"]
  const descriptions = [
    "Choose a vibe. This is the API you will be getting your songs from.",
    "Select a prepaid plan or a subscription based plan for your key.",
    "Copy the key given to you and go to Docs to learn how to make the API calls!"
  ]

  return (
    <div id='About' className='flex flex-col gap-10 text-white items-center py-[75px]'>
      <div className='uppercase text-2xl sm:text-3xl xl-4xl font-bold'>How it works</div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {steps.map((item, itemIndex) => {
          return (
            <WorkTiles key={itemIndex} step={item} header={headers[itemIndex]} description={descriptions[itemIndex]}/>
          )
        })}
      </div>
      <div className='w-[40%] text-center font-thin'>Disclaimer: Have an account with Apple Music, Spotify, or Soundcloud. Songs you receive from the API will be searchable there. Make a playlist!</div>
    </div>
  )
}

export default HowItWorks