import React from 'react';

const MenuItem = (props) => {

  const [name, type, ingredientList] = props.item;

  const listIngredients = (ingredientList) => {
    return ingredientList.map(ingredient => {
      return <p>{ingredient}</p>
    })
  }

  return (
    <div>
      <h1><em>({props.count})</em> {name}</h1>
      {listIngredients(ingredientList)}
    </div>
  )
}

export default MenuItem;