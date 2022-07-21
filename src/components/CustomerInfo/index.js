import React from 'react';


const CustomerInfo = ({customer}) => {

  const {name, phoneNumber, address, address2} = customer;

  return (
    <div>
      <h1>{name}</h1>
      <p>{phoneNumber}</p>
      <p>{address}</p>
      <p>{address2}</p>
    </div>
  )

}

export default CustomerInfo;