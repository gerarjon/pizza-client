import React from 'react';
import './style.css';

const FoodItem = ({item}) => {

  const {name, type} = item;

  const getIngredients = () => {
    const toppings = item.toppings;
    return (
      <div>
        <p>{item.sauce}</p>
        <p>{item.cheese}</p>
        {toppings.map(topping => (
          <p>{topping}</p>
        ))}
      </div>
    )
  }

  // Temporary count of 1
  return (
    <div>
      <h1 className='item-heading'>(1) {name}</h1>
      <section className='ingredient-list'>
        {type == "pizza" && getIngredients()}
      </section>
    </div>
  )
}

export default FoodItem;