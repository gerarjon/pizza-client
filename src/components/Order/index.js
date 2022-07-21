import React from 'react';
import CustomerInfo from '../CustomerInfo/index.js';
import MenuItem from '../MenuItem/index.js';


const Order = ({order}) => {
  const {customer, itemList, completed, number} = order;
  return !completed && (
    <div>
      <h1>{number}</h1>
      <CustomerInfo customer={customer} />
      {itemList.map(item => (
        <MenuItem item={item} />
      ))}
    </div>
  )

}

export default Order;