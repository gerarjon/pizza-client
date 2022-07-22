import React from "react";
import './style.css'

const AccordianItem = ({option, name, index, handleChange}) => {
  return(
    <div className="box accordian-item-selection" onClick={handleChange}>
      {option}
      <label className="radio is-pulled-right" name={name}   >
        { index === 0 ? 
          <input type="radio" value={option} name={name} defaultChecked/> :
          <input type="radio" value={option} name={name} />
        }
      </label>
    </div>
  )
};

export default AccordianItem;