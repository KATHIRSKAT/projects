import React from 'react'

function Buttons({OnClickHandler,value,title}) {
  return <button onClick = {OnClickHandler} value ={value} className='btns' >{title}</button>
}

export default Buttons;