import React from 'react'

function WorkTiles(props) {

  const { step, description, header } = props;

  return (
    <div className='flex flex-col max-w-[200px] items-center text-lg border rounded-xl p-3 gap-1'>
      <div className='flex flex-col items-center'>
        <div className='font-semibold'>{step}</div>
        <div className='font-semibold -mt-1'>{header}</div>
      </div>
      <div className='font-light leading-[25px] text-center'>{description}</div>
    </div>
  )
}

export default WorkTiles