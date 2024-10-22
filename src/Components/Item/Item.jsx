import React from 'react'

function Item(props) {
  return (
    <div className='w-full'>
      <img  src={props.image} alt="" />
      <p className='flex items-start text-left my-2 font-light text-xs'>{props.name}</p>
      <div className="flex gap-3">
        <div className='color-black weight-bold'>${props.new_price}</div>
        <div className='line-through color-red'>${props.old_price}</div>
      </div>
    </div>
  )
}

export default Item
