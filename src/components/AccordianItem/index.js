import React from "react";

const AccordianItem = ({option, name, index}) => {
  return(
    <div className="box accordian-item-selection" >
      {option}
      <label className="radio is-pulled-right">
        { index === 0 ? 
          <input type="radio" name={name} defaultChecked/> :
          <input type="radio" name={name} />
        }
      </label>
    </div>
  )
};

export default AccordianItem;