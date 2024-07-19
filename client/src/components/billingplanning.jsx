import React from 'react'


{/* <i className="fa-solid fa-check"></i>  check mark */}

{/* <i className="fa-regular fa-circle-check"></i> circle check */}

{/* <i className="fa-solid fa-cart-shopping"></i> cart */}

{/* <i className="fa-solid fa-ban"></i> cancel icon*/}

function BillingPlanning(props) {

  const { vibeCheckout } = props

  return (
    <div id='Payment-Plans' className='text-white min-h-screen grid grid-cols-1 lg:grid-cols-2 max-w-[1000px] mx-auto
    gap-5'>
      <form action="" method="POST" className='flex flex-col p-5 border h-[345px] rounded-xl gap-4'>
        <div className='flex justify-between'>
          <div className='text-xl font-extrabold'>Prepaid Plan</div>
          <div className='flex items-center gap-2 text-xl'>
            <i className="fa-regular fa-circle-check text-[15px]"></i>
            <div>Active</div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <div className='font-semibold'>Plan Details</div>
            <div className='flex items-center gap-2 font-thin'>
              <i className="fa-solid fa-check"></i>
              <div>20 fast prepaid API calls</div>
            </div>
            <div className='flex items-center gap-2 font-thin'>
              <i className="fa-solid fa-check"></i>
              <div>Songs when you need it</div>
            </div>
            <div className='flex items-center gap-2 font-thin'>
              <i className="fa-solid fa-check"></i>
              <div>Pay in advance</div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold'>Billing & Payment</div>
            <div className='flex justify-between font-thin'>
              <div>Price</div>
              <div>$2</div>
            </div>
            <div className='flex justify-between font-thin'>
              <div>Billing Period</div>
              <div>N/A</div>
            </div>
            <div className='flex justify-between font-thin'>
              <div>Renewal Date</div>
              <div>N/A</div>
            </div>
          </div>
        </div>
        <div className='flex justify-start'>
          {vibeCheckout && (          
          <button className='flex items-center font-semibold gap-2 bg-black py-2 px-4 rounded-xl hover:bg-white hover:text-black duration-200'>
            <i className="fa-solid fa-cart-shopping"></i>
            <div>Checkout with: {vibeCheckout}</div>
          </button>
          )}
        </div>
      </form>

      <form action='' method="POST" className='flex flex-col p-5 border h-[345px] rounded-xl gap-4'>
        <div className='flex justify-between'>
          <div className='text-xl font-extrabold'>Subscription Plan</div>
          <div className='flex items-center gap-2 text-xl'>
            <i className="fa-regular fa-circle-check text-[15px]"></i>
            <div>Active</div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <div className='font-semibold'>Plan Details</div>
            <div className='flex items-center gap-2 font-thin'>
              <i className="fa-solid fa-check"></i>
              <div>Pay per usage with song requests</div>
            </div>
            <div className='flex items-center gap-2 font-thin'>
              <i className="fa-solid fa-check"></i>
              <div>Unlimited API calls</div>
            </div>
            <div className='flex items-center gap-2 font-thin'>
              <i className="fa-solid fa-check"></i>
              <div>Endless beats</div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold'>Billing & Payment</div>
            <div className='flex justify-between font-thin'>
              <div>Price</div>
              <div>0.05&#162; / call</div>
            </div>
            <div className='flex justify-between font-thin'>
              <div>Billing Period</div>
              <div>Monthly</div>
            </div>
            <div className='flex justify-between font-thin'>
              <div>Renewal Date</div>
              <div>August 21, 2024</div>
            </div>
          </div>
        </div>
        <div className='flex justify-start'>
        {vibeCheckout && (          
          <button className='flex items-center font-semibold gap-2 bg-black py-2 px-4 rounded-xl hover:bg-white hover:text-black duration-200'>
            <i className="fa-solid fa-cart-shopping"></i>
            <div>Checkout with: {vibeCheckout}</div>
          </button>
          )}
        </div>
      </form>

      <div className='flex items-center gap-5 text-5xl justify-center max-w-[1000px] mx-auto h-[200px]'>
        <div>Music API</div>
        <i className="fa-solid fa-music"></i>
      </div>

      <div className='flex items-center gap-5 text-3xl justify-center max-w-[1000px] mx-auto h-[200px]'>
        <a className='hover:underline' href='https://github.com/nickmcc90'>Github: nickmcc90</a>
      </div>
    </div>
  )
}

export default BillingPlanning