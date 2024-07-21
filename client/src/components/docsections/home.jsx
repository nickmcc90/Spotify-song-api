import React from 'react'

function Home() {
  return (
    <div className='flex flex-col gap-6 max-w-[550px] px-4'>
      <div className='flex flex-col gap-4'>
        <div className='text-xl sm:text-2xl xl:text-3xl font-bold'>
          Music API: Documentation
        </div>
        <div className='font-thin text-lg leading-[25px]'>Welcome to the documentation for <a href='/' className='underline mr-1'>Music API!</a>
          Our API allows you to discover new songs in our selected categories.
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='font-semibold text-lg'>Why was Music API born?</div>
        <div className='font-thin text-lg leading-[25px]'>Music API is comprised of handpicked
        songs that we actually enjoy. While Spotify or SoundCloud can recommend you
        songs based on an algorithm, nothing beats having a good ol&#39;
        human ear recommend you songs.</div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='font-semibold text-lg'>Who is our target audience?</div>
        <div className='font-thin text-lg leading-[25px]'>We understand that
        &#x0022;hip&#x0022; people aren't going to be looking for APIs to find their next bop.
        </div>
        <i className='font-thin text-lg leading-[25px]'>For the sake of NOT coming clean about this project solely demonstrating my frontend
        and backend skills...</i>
        <div className='font-thin text-lg leading-[25px]'>
          This API is for developers AND regular-degular people who just want to 
          add new songs to their playlist! For those
          reggy-deggy people, we've made some instructions for you.
        </div>
      </div>
    </div>
  )
}

export default Home