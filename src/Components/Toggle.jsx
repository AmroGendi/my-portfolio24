import React from 'react'
import './Toggle.css'

const Toggle = ({ handleChange, isChecked}) => {
  return (
    <div className='toggleContainer'>
      <input type="checkbox"
      id='check'
      className='toggle'
      onChange={handleChange}
      checked={isChecked}
      />
      <label htmlFor="check"></label>
    </div>
  )
}

export default Toggle
