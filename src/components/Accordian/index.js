import React, {useState} from "react";

const Accordian = (props) => {

  const [isToggled, setIsToggled] = useState(false);
  const toggleAccordianItem = () => {
		setIsToggled(!isToggled);
	}

  return (
    <>
      <div className='accordian'>
        {/* accordian heading start */}
        <div onClick={toggleAccordianItem}>
          <span className='is-size-4'>Crust</span>
          <a className='is-pulled-right'>Edit</a>
        </div>
        <div id="selected-crust">Medium Hand Tossed</div>
        {/* accordian heading end */}
        <div className={`accordian item ${isToggled ? "" : "is-hidden"}`}>
          asdfasdf;alsdfjdlf
        </div>
      </div>
    </>
  )
}

export default Accordian