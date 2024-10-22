import React from 'react'

function NewsLetter() {
  return (
    <div className='mb-20'>
      <div className='flex flex-col justify-center items-center gap-4 mt-10 w-full h-64 flex flex-1 w-full  bg-gradient-to-b from-[#fde1ff] via-[#fde1ff] to-[#e1ffea22]'>
         <div className='text-3xl font-semibold'>Get Exclusive Offers on Your Email</div>
         <div className='text-md font-light'>Subscribe our new letter and stay updated</div>
         <div className='flex justify-center items-center w-full h-10 relative'>
         <input className='p-3 rounded-full w-1/2 h-10 ' type="text" placeholder='Enter Email Id' /> 
         <button className='absolute right-1/4 bg-black rounded-full px-4 text-white h-10'>Subscribe</button>
         </div>
       </div>
    </div>
  )
}

export default NewsLetter
