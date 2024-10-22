import React from 'react'
import new_collections from '../Assets/Frontend_Assets/new_collections'
import Item from '../Item/Item'
function New_Collection() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center mb-8'>
        <span className='text-4xl'>NEW COLLECTIONS</span>
        <hr className=' w-44 weight-semibold bg-gray-300 h-1'/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
           {new_collections.map((item,index)=>{
            return <Item 
             key={index} 
             id={item.id}
             name={item.name} 
             new_price={item.new_price} 
             old_price={item.old_price} 
             image={item.image}/>
           })}
        </div>

    </div>
  )
}

export default New_Collection
