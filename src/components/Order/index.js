import React from 'react';
import CustomerInfo from '../CustomerInfo/index.js';
import FoodItem from '../FoodItem/index.js';
import './style.css';


const Order = ({order}) => {
  const {customer, itemList, completed, number} = order;
  return !completed && (
    <div className='order-wrapper'>
      <h1 className='order-count'>{number}</h1>
      <CustomerInfo customer={customer} />
      <div className='item-list'>
        {itemList.map(item => (
          <FoodItem item={item} />
        ))}
      </div>
    </div>
  )

}

export default Order;