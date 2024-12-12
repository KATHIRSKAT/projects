import React from 'react'
import "./Recommended.css"
import Buttons from '../Components/Buttons';

function Recommended({handleClick}) {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
      <button className='btns'
      value ={''}
      onClick = {handleClick}
      >
      All product</button>
      <Buttons 
      value = "Nike"
      onclickHandler = {handleClick}
      title = "Nike"
      />
      <Buttons 
      value = "Adidas"
      onclickHandler = {handleClick}
      title = "Adidas"
      />
      <Buttons 
      value = "Puma"
      onclickHandler = {handleClick}
      title = "Puma"
      />
      <Buttons 
      value = "Vans"
      onclickHandler = {handleClick}
      title = "Vans"
      />
      </div>

    </div>
  )
}

export default Recommended;