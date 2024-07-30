import React, { useState } from 'react'

function Feedback() {

  // feedback from the user in the input box
  const [feedback, setFeedback] = useState()

  // information gets sent to server
  const serverDOMAIN = 'https://nicks-music-api.ink'

  // we send a post request to the server that sends the feedback
  async function deliverFeedback() {
    if(!feedback) {
      return
    } else {
      try {
        const res = await fetch(`${serverDOMAIN}/feedback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ feedback })
        })
        const data = await res.json()
        const { message } = data
        if(message === 'Success') {
          alert("Successful sending of information!")
        }
      } catch (err) {
        console.log(err)
        alert("Something went wrong with the delivery.")
      }
      
    }
  }

  return (
    <div className="flex items-center justify-center py-[50px] gap-6 bg-black text-white flex-col w-full text-center">
      <div className='flex flex-col gap-4 w-[400px]'>
        <p>Do you have another <span className='text-purple-500'>VIBE</span> that we can provide to everyone? Or do you have 
          feedback on this website?
        </p>
        <p>Please let us know!</p>
      </div>
      <div className='flex flex-col gap-4 w-[400px] items-center'>
        <input 
          placeholder='What would you like to say?' className='p-2 w-full text-center text-black'
          value={feedback}
          onChange={(e) => {setFeedback(e.target.value)}}
        />
        <button 
          className='border border-solid border-white p-2 w-[40%]
        hover:text-black hover:bg-white duration-200'
          onClick={deliverFeedback}
        >
          Send
        </button>
      </div>
      <div>Your message will be sent to our team for consideration!</div>
    </div>
  )
}

export default Feedback