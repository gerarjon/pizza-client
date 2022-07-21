import React, {useState} from "react";
import AccordianItem from "../AccordianItem";
import AccordianItemTopping from "../AccordianItemTopping";
import './style.css'

const Accordian = ({select, setOrder, handleChange, type}) => {

  const [isToggled, setIsToggled] = useState(false);
  // const optionNameRef = useRef()
  const toggleAccordianItem = () => {
		setIsToggled(!isToggled);
	}

  return (
    <>
      <div className='accordian'>
        {/* accordian heading start */}
        <div className="accordian-heading">
          <div className ="accordian-heading-title" onClick={toggleAccordianItem}>
            <span className='is-size-4'>{select.type}</span>
            <p className='is-pulled-right'>Edit</p>
          </div>
          <div id="selected-crust"></div>
          {/* accordian heading end */}
        </div>
        <div className={`accordian-item ${isToggled ? "" : "is-hidden"}`}>
          {type === 'base' ?
          <>
            {select.options.map((option, index) => (
              <AccordianItem
                key={index}
                index={index}
                option={option}
                name={select.type}
                handleChange={handleChange}
              />
            ))} 
          </>
          :
          <>
            {select.options.map((option, index) => (
              <AccordianItemTopping
                key={index}
                index={index}
                option={option}
                name={select.type}
                handleChange={handleChange}
              />
            ))} 
          </>
          }
          
        </div>
      </div>
    </>
  )
}

export default Accordian