import React from 'react';
import './style.css';


const CustomerInfo = ({customer}) => {

  const {name, phoneNumber, address, address2} = customer;

  return (
    <div>
      <p className='customer-name'>{name}</p>
      <p className='phone-number'>{phoneNumber}</p>
      <div className='address'>
        <p>{address}</p>
        <p>{address2}</p>
      </div>
    </div>
  )

}

export default CustomerInfo;