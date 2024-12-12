import React from 'react'

function Input({handleChange,value,title,name,color}) {
  return (
    <div>
      <label className="sidebar-label-container">
        <input 
        type="radio" 
        name = {name}
        value = {value}
        onChange={handleChange}
        />
        <span className="checkmark"
        style={{backgroundColor:color}}
        ></span>{title}
      </label>
    </div>
  )
}

export default Input;