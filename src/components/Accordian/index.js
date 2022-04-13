import React, {useState} from "react";
import AccordianItem from "../AccordianItem";
import './style.css'

const Accordian = ({select}) => {

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
          <div onClick={toggleAccordianItem}>
            <span className='is-size-4'>{select.type}</span>
            <p className='is-pulled-right'>Edit</p>
          </div>
          <div id="selected-crust">{select.type}</div>
          {/* accordian heading end */}
        </div>
        <div className={`accordian-item ${isToggled ? "" : "is-hidden"}`}>
          {select.options.map((option, index) => (
            <AccordianItem
              key={index}
              index={index}
              option={option}
              name={select.type}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Accordian