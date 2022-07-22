import React, { useState } from 'react';
import Accordian from '../../components/Accordian';
import './style.css';

const pizzaMenu = require('../../utils/pizzaMenu.json');
const tabs = [`CRUST, SAUCE & CHEESE`, `TOPPINGS`]

const BuildPizza = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [order, setOrder] = useState({ 
    "crust": "original pan",
    "sauce": "regular",
    "cheese": "regular",
    "toppings": []
  })

  const changeActiveTab = (tab) => {
    setActiveTab(tab)
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setOrder(prevState => ({
      ...prevState, [name]: value
    }));
  }

  const handleToppingChange = (event) => {
    let newToppings = [...order.toppings, event.target.value];
    if (order.toppings.includes(event.target.value)) {
      newToppings = newToppings.filter(topping => topping !== event.target.value)
    }
    setOrder(prevState => ({
      ...prevState, "toppings": newToppings
    }))
  }

  const onSubmitPizza = (e) => {
    e.preventDefault();
    alert(JSON.stringify(order, null, 2))
  }

  // const onSubmitOrder = (event) => {
  //   event.preventDefault();
  //   const name = nameElRef.current.value;
  //   const number = phonenumberElRef.current.value;
  //   const address = addressElRef.current.value;
  //   // const pep = pepTopElRef.current.value;
  //   // const description = descriptionElRef.current.value;

  //   const data = {
  //     name: name,
  //     phoneNumber: number,
  //     address: address
  //   }
  //   setOrder(data)
  // }

  return(
    <>
      <section>
        <div className='container is-max-desktop'>
          <p className='title'>Make an Order</p>

          {/* <form>
            <div className='field'>
              <label className='label'>Toppings</label>
              <label className='checkbox'>
                <input type='checkbox' name='toppings' value='pepperoni' /> Pepperoni
              </label>

              <label className='checkbox'>
                <input type='checkbox' name='toppings' value='sausage' /> Sausage
              </label>

              <label className='checkbox'>
                <input type='checkbox' name='toppings' value='ham' /> Ham
              </label>
            </div>

            <div className='field'>
              <label className='label'>Description</label>
              <div className='control'>
                <textarea className='textarea' placeholder='Instructions'></textarea>
              </div>
            </div>
            
          </form> */}

          <div className='columns'>
						{/* pizza builder */}
            <div className='column'>
							<div className='tabs is-boxed is-fullwidth tabs-confirmation-link'>
								<ul>
									<li 
                    className={activeTab === tabs[0] ? 'is-active' : ""}
                    onClick={() =>changeActiveTab(tabs[0])}>
										<a>
											<span>{tabs[0]}</span>
										</a>
									</li>
									<li className={activeTab === tabs[1] ? 'is-active' : ""}
                    onClick={() => changeActiveTab(tabs[1])}
                    >
										<a>
											<span>{tabs[1]}</span>
										</a>
									</li>
								</ul>
							</div>


							{/* accordian */}
							<div className='tabs-confirmation-panes'>
                {/* Pizza Base */}
								{activeTab === tabs[0] && pizzaMenu.base.map((item, index) => (
									<Accordian 
                    type='base'
										select={item} 
										key={index}
                    handleChange={handleChange}
                    setOrder={setOrder}
									/>
								))}

                {/* Pizza Toppings */}
                {activeTab === tabs[1] && pizzaMenu.toppings.map((item, index) => (
									<Accordian 
                    type='topping'
										select={item} 
										key={index}
                    handleChange={handleToppingChange}
                    setOrder={setOrder}
									/>
								))}
							</div>
							{/* end accordian */}
            </div>

						{/* pizza img and confirmation */}
            <div className='column'>
              <pre>{JSON.stringify(order, null, 2)}</pre>

              <form onClick={onSubmitPizza}>
                <div className='field' >
                  <div className='control'>
                    <button 
                      type='submit' 
                      className='button'
                    >
                      Submit Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default BuildPizza;