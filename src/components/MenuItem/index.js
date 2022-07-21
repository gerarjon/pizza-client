import React from 'react';

const MenuItem = ({item}) => {

  const {name, type} = item;

  const getIngredients = () => {
    const toppings = item.toppings;
    return (
      <div>
        {toppings.map(topping => (
          <p>{topping}</p>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h1><em>(1)</em> {name}</h1>
      {type == "pizza" && getIngredients()}
    </div>
  )
}

export default MenuItem;