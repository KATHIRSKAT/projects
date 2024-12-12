import React from 'react'
import './Sidebar.css'
import { FaShoppingCart } from 'react-icons/fa';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
function Sidebar({handleChange}) {
  return (
   <>
   <section className="sidebar">
      <div className="logo-container">
        <h1><FaShoppingCart/></h1>
      </div>
      <Category 
      handlechange={handleChange}
      />
      <Price
      handlechange={handleChange} 
      />
      <Colors 
      handlechange={handleChange}
      />
   </section>
   </>
  )
}
export default Sidebar
