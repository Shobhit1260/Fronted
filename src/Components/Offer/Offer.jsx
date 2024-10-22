import React from 'react'
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'
function Offer() {
  return (
    <div className='flex justify-center items-center my-12 w-full  '>
      <div className=' w-full  bg-gradient-to-b from-[#fde1ff] via-[#fde1ff] to-[#e1ffea22] flex justify-around pt-10'>
        <div className='flex flex-col items-start justify-center '>
            <p className='text-6xl font-bold '>Exclusive</p>
            <p className='text-6xl font-bold '>Offers for you </p>
            <p className='text-xl font-light'>50% off on all products</p>
            <div className='bg-red-500 rounded-full text-white w-1/2 h-12 flex justify-center items-center mt-5'>Check Now</div>
        </div>
        <div className=''>
            <img src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default Offer
