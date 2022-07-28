import React from 'react';
import './style.css';
import InputBox from '../../components/InputBox';

const Cart = () => {

  // TODO submit button
  const tempFunc = () => {}

  return (
    <div className='main-cart-container'>
      <section className='customer-info-fields'>
        <form id='customer-info' onSubmit={tempFunc}>
          <h1>Customer Info</h1>
          <div className='input-row'>
            <InputBox label='First Name' size={25} />
            <InputBox label='Last Name' size={25} />
          </div>
          <InputBox label='Phone Number' size={20} />
          <InputBox label='Email' />
          <InputBox label='Address' />
          <div className='input-row'>
            <InputBox label='City' />
            <InputBox label='State' />
            <InputBox label='Zipcode' />
          </div>
        </form>
      </section>
      <section className='cart-display'>
        <h1>Cart</h1>
        <p>Cart Item 1</p>
        <p>Cart Item 2</p>
        <button form='customer-info'>Confirm</button>
      </section>
    </div>
  )
}

export default Cart;