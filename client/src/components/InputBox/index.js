import React from 'react';
import './style.css';

const InputBox = ({label, size}) => {

  return (
    <div className='input-box'>
      <label className='input-label'>{label}</label>
      <input size={size} id={label} className='input-field'/>
    </div>
  )
}

export default InputBox;