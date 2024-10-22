import React from 'react'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrow from '../Assets/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'
function hero() {
  return (
    <div className='flex flex-1 w-full  bg-gradient-to-b from-[#fde1ff] via-[#fde1ff] to-[#e1ffea22]'>
    <div className='pl-20 ml-4 flex flex-col justify-center items-start w-1/2'>
       <h1 className='font-medium text-md'>NEW ARRIVALS ONLY</h1>
       <div className='flex justify-start items-center mt-6 '>
       <h2 className='font-semibold text-5xl'>new</h2>
       <img className='w-16 h-12' src={hand_icon} alt="" />
       </div>
       <div className=' font-semibold text-5xl'>Collections</div>
       <div className='font-semibold text-5xl'>for everyone</div>
       <div className='text-white bg-red-500 rounded-3xl w-60 h-12 flex justify-center items-center gap-4 mt-6'>
       <div >latest Collection</div>
       <img className='text-black'src={arrow} alt="arrow"  />
       </div>
       </div>
    <div className='flex flex-1 justify-center items-center w-1/2'>
       <img src={hero_image} alt=""  />
    </div>
    </div>
  )
}

export default hero
