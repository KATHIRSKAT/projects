import React from 'react'
import "./Colors.css"
import Input from '../../Components/Input';

function Colors({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <div className='sidebar-items'>
      <label className="sidebar-label-container">
        <input 
        type="radio" 
        name = "test3"
        value = ""
        onChange={handleChange}
        />
        <span className="checkmark all"
        ></span> All
      </label>
     <Input
     handleChange={handleChange}
     value = "black"
     title = "Black" 
     name = "test3"
     color="black"
     />
     <Input
     handleChange={handleChange}
     value ='blue'
     title = "Blue"
     name = "test3"
     color ="blue"
     />
     <Input
     handleChange={handleChange}
     value ="red"
     title = "Red" 
     name = "test3"
     color = "red"
     />
     <Input
     handleChange={handleChange}
     value = "green"
     title = "Green" 
     name = "test3"
     color= "green"
     />
      <Input
     handleChange={handleChange}
     value = "white"
     title = "White" 
     name = "test3"
     />
    </div>
  </div>
  )
}

export default Colors;