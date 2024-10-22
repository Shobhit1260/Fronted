import React,{useState} from 'react'
import './Navbar.css'
// @ts-ignore
import logo from '../Assets/Frontend_Assets/logo.png'
// @ts-ignore
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import {Link} from 'react-router-dom'


function Navbar() {
  let [menu,setmenu]=useState("shop");
  return (
    <div className="border-b-4 border-b-stone-300 w-full h-full flex justify-around items-center p-4 ">
      <div className='flex justify-center items-center'>
      <img className='' src={logo} alt=''/>
      <p>SHOPER</p>
      </div>
      <div className='w-1/2'>
        <ul className='flex  justify-center items-center gap-5 cursor-pointer'>
        <li onClick={()=>{setmenu("shop")}}><Link to="/">Shop</Link>  {menu==="shop" && <hr className=' border-b-2 border-red-600'/>}</li>
        <li onClick={()=>{setmenu("men")}}><Link to="/mens">Men</Link> {menu==="men" && <hr className='border-b-2 border-red-600'/>}</li>
        <li onClick={()=>{setmenu("women")}}><Link to="/womens">Women</Link> {menu==="women" && <hr className='border-b-2 border-red-600'/>}</li>
        <li onClick={()=>{setmenu("kid")}}><Link to="/kids">Kids</Link> {menu==="kid" && <hr className='border-b-2  border-red-600'/>}</li>
        </ul>
        
      </div>
       <div  className='relative flex justify-center items-center gap-3 '>
        <Link to="/Signuplogin"><button className='rounded-xl border border-gray-950 p-1 active:bg-zinc-400 w-20'>login</button></Link>
        <Link to="/Cart"><img  src={cart_icon} alt="" /></Link>
        <div className='absolute bg-red-500 rounded-full flex justify-center items-center w-6 h-6 text-white -top-2 -right-2'>0</div>
       </div>

    </div>
  )
}

export default Navbar
