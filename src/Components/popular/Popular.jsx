import React from 'react'
import data_product from '../Assets/Frontend_Assets/data'
import Item from '../Item/Item'

function Popular() {
  return (
    <div className='w-full mt-8' >
      <h1 className='text-4xl weight-bold m-2 '>POPULAR IN WOMEN</h1>
      <hr className=' mx-auto w-36 bg-gray-950 h-1'/>
      <div className='flex justify-center items-center mt-10'>
      <div className='flex justify-cneter items-center gap-10'>
      {data_product.map((item,index)=>{
        return <Item key={index} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}/>
      })}
      </div>
     </div>
    </div>
  )
}

export default Popular
