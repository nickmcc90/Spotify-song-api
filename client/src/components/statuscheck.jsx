import React from 'react'
import { useState, useEffect } from 'react'

import Modal from './inner-components/cancelsubmodal'

function StatusCheck() {

  // This is the domain that the api status check request gets sent to.
  const serverDOMAIN = 'http://nicks-music-api.ink'

  // This is the value of the input bar when the user finishes typing.
  const [APIValue, setAPIValue] = useState("")

  // This variable displays an status response underneath the input bar when the value is not null 
  const [statusDisplay, setStatusDisplay] = useState(null)

  // This variable toggles the subscription cancellation modal
  const [toggleModal, setToggleModal] = useState(false)

  // This function displays or hides the cancel subscription modal.
  // This function can only be accessed in a status display that reveals a cancel subscription button.
  function cancelSubModalShowing() {
    setToggleModal(!toggleModal)
  }

  // This function initiates cancelling a subscription. This is only called from cancelsubmodal.jsx.
  // We access the /delete route in server.js
  async function cancelSubscription() {
    console.log("yup")

    if(!APIValue) {
      return
    } else {
      const res = await fetch(`${serverDOMAIN}/delete/${APIValue}`)
      const { message } = await res.json()
      console.log(message)
      if(message === "Deleted.") {
        // if the subscription is successfully deleted
        setStatusDisplay(
          <div className='flex gap-5 items-center'>
            <div className='text-blue-300'>Subscription status:</div>
            <div className='text-green-500'>Deleted.</div>
          </div>
        )
      } else {
        // if the subscription had a problem deleting.
        setStatusDisplay(
          <div className='text-red-500'>
            Subscription could not be removed. Please refresh the page or try again in a few minutes.
          </div>
        )
      }
    }
  }

  // This function sends a get request to the /check-status route of server.js and
  // displays the status message underneath the input bar.
  async function checkStatus() {
    if(!APIValue) {
      return
    } else {
      const res = await fetch(`${serverDOMAIN}/check-status/${APIValue}`)
      const { status, vibe } = await res.json()
      console.log(status)
      // configuring status display
      if(status === "API key does not exist.") {
        setStatusDisplay(<div className='text-red-500'>API key does not exist.</div>)
      } else if (status === null) {
        setStatusDisplay(<div className='text-red-500'>Inactive key. Type: {vibe}</div>)
      } else if (status === "subscription") {
        setStatusDisplay(
          <div className='flex gap-5 items-center'>
            <div className='text-blue-300'>Subscription status:</div>
            <div className='text-green-500'>ACTIVE</div>
            <div className='text-blue-300'>Type: {vibe}</div>
            <button className='flex gap-2 items-center bg-coral border-white bg-[#c04732]
            rounded-full px-2 hover:opacity-80' onClick={cancelSubModalShowing}>
              <i className="fa-solid fa-ban"></i>
              <div>Cancel subscription?</div>
            </button>
          </div>
        )
      } else {
        // if the status is a number, then we are getting the status of a prepaid key.
        setStatusDisplay(<div className='text-blue-300'>API calls left: <span className='text-green-400 mr-5'>{status}</span>Type: {vibe}</div>)
      }
    }
  }

  // this returns the display messages to nothing everytime the page refreshes.
  // we don't want the messages persisting after reloading.
  useEffect(() => {
    setStatusDisplay(null)
  }, [])

  return (
    <div id='Status-Check' className='h-[225px] bg-[#2e2860] w-full'>
      <div className='flex flex-col items-center justify-center text-white px-4 py-6 gap-5'>
        <div className='flex flex-col gap-1 items-center'>
          <h1 className='text-2xl sm:text-3xl xl-4xl font-bold uppercase'>Check Key Status</h1>
          <div>Please enter your API key below to check its status.</div>
          <div className='flex gap-2 items-center'>
            <div className='text-[#3cafe4]'>Example Key</div>
            <div>alksdjfSDK3edkjsADDD</div>
          </div>
        </div>
        <div className='flex justify-around w-[50%] -mb-2'>
          <input 
            placeholder='Enter API Key...' 
            className='w-[50%] xl:w-[80%] rounded-full p-3 text-black'
            value={APIValue}
            onChange={(e) => {setAPIValue(e.target.value)}}
          />
          <button onClick={checkStatus} className='bg-[#5147a5] p-2 rounded-xl hover:opacity-65'>Check Status</button>
        </div>
        {/* This is the room to render variable status statements */}
        {statusDisplay}
      </div>

      {/* The cancel subscription modal does not render to the screen unless we toggle it.*/}
      {toggleModal && (<Modal cancelSubscription={cancelSubscription} modalShowing={cancelSubModalShowing} />)}
    </div>
  )
}

export default StatusCheck