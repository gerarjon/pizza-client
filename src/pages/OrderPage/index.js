import React, { useRef, useState, useEffect } from 'react';
import Accordian from '../../components/Accordian';
import './style.css';

const OrderPage = () => {
  const [order, setOrder] = useState({})
	
  const isFirstRender = useRef(true)
  // For form:
  // Customer
  // - name, phone number, address
  // Menu item
  // - pizza (with ingredients?)
  
  const nameElRef = useRef();
  const phonenumberElRef = useRef();
  const addressElRef = useRef();
  // const pepTopElRef = useRef();
  // const ssgTopElRef = useRef();
  // const hamTopElRef = useRef();
  // const descriptionElRef = useRef()

  const onSubmitOrder = (event) => {
    event.preventDefault();
    const name = nameElRef.current.value;
    const number = phonenumberElRef.current.value;
    const address = addressElRef.current.value;
    // const pep = pepTopElRef.current.value;
    // const description = descriptionElRef.current.value;

    const data = {
      name: name,
      phoneNumber: number,
      address: address
    }
    setOrder(data)
  }

	

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return
  //   }
  //   console.log(order);
  // },[order]);

  return(
    <>
      <section>
        <div className='container is-max-desktop'>
          <p className='title'>Make an Order</p>

          {/* <form>
            <div className="field">
              <label className="label">Name</label>
              <p className='control'>
                <input 
                  className='input' 
                  type='text' 
                  placeholder='John Smith' 
                  ref={nameElRef}
                  required
                />
              </p>
            </div>

            <div className='field'>
              <label className='label'>Phone Number</label>
              <p className='control'>
                <input 
                  className='input' 
                  type='tel' 
                  placeholder='555-555-5555' 
                  ref={phonenumberElRef}
                  required
                />
              </p>
            </div>

            <div className='field'>
              <label className='label'>Address</label>
              <p className='control'>
                <input 
                  className='input' 
                  type='text' 
                  placeholder='White House USA' 
                  ref={addressElRef} 
                  required
                />
              </p>
            </div>

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
            <div className='field' >
              <div className='control'>
                <button 
                  type='submit' 
                  className='button is-link'
                  onClick={onSubmitOrder}
                >
                  Submit Order
                </button>
              </div>
            </div>
          </form> */}

          <div className='columns'>
						{/* pizza builder */}
            <div className='column'>
							<div className='tabs is-boxed tabs-confirmation-link'>
								<ul>
									<li className='is-active'>
										<a>
											<span>{`CRUST, SAUCE & CHEESE`}</span>
										</a>
									</li>
									<li >
										<a>
											<span>TOPPINGS</span>
										</a>
									</li>
								</ul>
							</div>
							{/* accordian */}
							<div className='tabs-confirmation-panes'>
								<Accordian />
								<Accordian />
								
							</div>
							{/* end accordian */}

            </div>

						{/* pizza img and confirmation */}
            <div className='column'>
              right side
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default OrderPage;