import React from 'react'
import {createContext} from 'react'
import all_product from '../Components/Assets/Frontend_Assets/all_product'
export const ShopContext = createContext(null);

const ShopContextProvider=(props)=>{
    const ContextValue={all_product};
    return (
        <ShopContextProvider value={ContextValue}>
            {props.children}
        </ShopContextProvider>
    )
}
export default ShopContextProvider

