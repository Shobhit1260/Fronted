import React,{useState} from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop.jsx'
import Cart from './Pages/Cart.jsx'
import Product from './Pages/Product.jsx';
import Signuplogin from './Pages/Signuplogin.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Hero from './Components//Hero/Hero.jsx'
import Footer from './Components/Footer/Footer.jsx'
import banner_mens from './Components/Assets/Frontend_Assets/banner_mens.png'
import banner_women from './Components/Assets/Frontend_Assets/banner_women.png'
import banner_kids from './Components/Assets/Frontend_Assets/banner_kids.png'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      
       <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/men" element={<ShopCategory banner={banner_mens} category="men"/>}></Route>
        <Route path="/women" element={<ShopCategory banner={banner_women} category="women"/>}></Route>
        <Route path="/kids" element={<ShopCategory  banner={banner_kids} category="kids"/>}></Route>
        <Route path="/Product" element={<Product/>}>
        <Route path=":ProductId" element={<Product/>}/>
        </Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Signuplogin" element={<Signuplogin/>}></Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
