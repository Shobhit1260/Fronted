import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import all_product from '../Components/Assets/Frontend_Assets/all_product'
function ShopCategory(props) {
  const {all_product}= useContext(ShopContext);
  console.log('Banner:', props.banner);
  console.log('Category:', props.category);
  return (
    <div> 
      <img src={props.banner} alt={props.category} />
    </div>
  )
}

export default ShopCategory
