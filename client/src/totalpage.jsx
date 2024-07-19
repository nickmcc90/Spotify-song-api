import React from 'react'

import Hero from './components/hero'
import Navbar from './components/navbar'
import StatusCheck from './components/statuscheck'
import HowItWorks from './components/howitworks'
import Updates from './components/updates'
import VibeSection from './components/vibesection'
import ColorChanger from './components/colorchanger'
import BillingPlanning from './components/billingplanning'

function TotalPage(props) {

  const { vibeCheckout, setVibeCheckout } = props

  return (
   <>
    <div className='bg-gradient-to-t from-[#000000] from-10% via-[#170a35] via-60% to-[#421e97] min-h-screen w-full pb-8'>
      <Navbar />
      <Hero />
    </div>
    <StatusCheck />
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