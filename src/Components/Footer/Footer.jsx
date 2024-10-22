import React from 'react'
import logo_big from '../Assets/Frontend_Assets/logo_big.png'
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'
import pintester_icon from '../Assets/Frontend_Assets/pintester_icon.png'

import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className=' w-full'>
      <div className='flex justify-center items-center gap-5'>
        <img src={logo_big} alt=""/>
        <span className='text-2xl font-md '>SHOPPER</span>
      </div>
      <div className='mt-4 flex gap-4 justify-center itens-center'>
        <div>Company</div>
        <div>Product</div>
        <div>Offices</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className=' my-12 flex justify-center items-center gap-8'>
        <img src={instagram_icon} alt="" />
        <img src={pintester_icon} alt="" />
        <img src={whatsapp_icon} alt="" />
      </div>
      <hr className='w-full mt-4 bg-gray-400 h-3/2'/>
      <div className='my-4 gap-1 flex justify-center items-center'> 
        <p>Copyright</p>
        <p>@</p>
        <p>2023</p>
        <p>-</p>
        <p>All Right Reseversed.</p>
      </div>
    </div>
  )
}

export default Footer
