import React, { useState } from 'react'
import Hero from './components/hero'
import Navbar from './components/navbar'
import StatusCheck from './components/statuscheck'
import HowItWorks from './components/howitworks'
import Updates from './components/updates'
import VibeSection from './components/vibesection'
import ColorChanger from './components/colorchanger'
import BillingPlanning from './components/billingplanning'

function TotalPage() {

  // this variable stores the customer's "vibe" choice.
  // we deliver this variable to <ColorChanger> change the color of the screen
  // we deliver this variable to <VibeSection> to grab the value.
  // we deliver this variable to <BillingPlanning> to checkout in Stripe.
  const [vibeCheckout, setVibeCheckout] = useState(null)

  return (
   <>
    {/* Wrapping the nav bar and hero in a div as my landing page */}
    <div className='bg-gradient-to-t from-[#000000] from-10% via-[#170a35] via-60% to-[#421e97] min-h-screen w-full pb-8'>
      <Navbar />
      <Hero />
    </div>
    <StatusCheck />
    {/* Passing these 4 components as children inside of <ColorChanger> so the background can change */}
    <ColorChanger vibeCheckout={vibeCheckout}>
      <HowItWorks />
      <Updates />
      <VibeSection vibeCheckout={vibeCheckout} setVibeCheckout={setVibeCheckout}/>
      <BillingPlanning vibeCheckout={vibeCheckout}/>
    </ColorChanger>   
   </>
  )
}

export default TotalPage