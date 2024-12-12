import React from 'react'
import "./Nav.css";
import { FiHeart } from 'react-icons/fi';
import { AiOutlineUserAdd} from "react-icons/ai"
import { FaShoppingCart } from 'react-icons/fa';

function Nav({query,setQuery}) {
  return (
    <nav>
      <div className='nav-container'>
        <input 
        type='text'
        placeholder='Enter Your Search Shoes'
        className='search-input' 
        value = {query}
        onChange={(e)=>setQuery(e.target.value)}/>
    </div>
    <div className="profile-container">
    <a href="#">
        <FiHeart className='nav-icons' />
      </a>
      <a href="#">
        <FaShoppingCart className='nav-icons' />
      </a>
      <a href="#">
        <AiOutlineUserAdd className='nav-icons' />
      </a>
    </div>
    </nav>
  )
}

export default Nav;  