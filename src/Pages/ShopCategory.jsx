import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import all_product from '../Components/Assets/Frontend_Assets/all_product'
function ShopCategory(props) {
  return (
    <div>
       const {all_product}= useContext(ShopContext);
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategory
