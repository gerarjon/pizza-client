import React from 'react';


const CustomerInfo = (props) => {
  
  const [name, phoneNumber, address] = props.customer;

  return (
    <div>
      <h1>{name}</h1>
      <p>{phoneNumber}</p>
      <p>{address}</p>
    </div>
  )

}

export default Home;