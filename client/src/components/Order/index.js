import React from 'react';
import CustomerInfo from '../CustomerInfo/index.js';
import MenuItem from '../MenuItem/index.js';


const Order = (props) => {

  const [customer, itemList] = props;

  const listItems = (itemList) => {
    return itemList.map(item => {
      return <MenuItem item={item} />
    })
  }

  return (
    <div>
      <CustomerInfo customer={customer} />
      {listItems(itemList)}
    </div>
  )

}

export default Home;