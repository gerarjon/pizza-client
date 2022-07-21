import React from "react";
import './style.css'

const AccordianItemTopping = ({option, name, handleChange}) => {
  return(
    <div className="box accordian-item-selection">
      {option}
      <label className="checkbox is-pulled-right" name={name}   >
          <input type="checkbox" value={option} name={name} onClick={handleChange}/> 
      </label>
    </div>
  )
};

export default AccordianItemTopping;