import React, { useState } from 'react';
import Order from '../../components/Order/index.js';
import './style.css';

const MakeTable = () => {

  // Temporary data for testing
  const dummyOrderList = [
    {
      completed: false,
      number: 1,
      customer: {
        name: "Stephen Strange",
        phoneNumber: "425-777-7777",
        address: "123 Fake Street NW",
        address2: "Hannah, Montana 12345"
      },
      itemList: [
        {
          name: "Pizza Pizza",
          type: "pizza",
          sauce: "Saucy Sauce",
          cheese: "Cheesy Cheese",
          toppings: [
            "Anchovies"
          ]
        },
        {
          name: "Sahara Dessert",
          type: "dessert",
        }
      ]
    },
    {
      completed: false,
      number: 2,
      customer: {
        name: "Tony Stark",
        phoneNumber: "425-888-8888",
        address: "456 Real Street W",
        address2: "North, West 55555"
      },
      itemList: [
        {
          name: "Pizza Rolls",
          type: "pizza",
          sauce: "Cheesy Sauce",
          cheese: "Saucy Cheese",
          toppings: [
            "One Fish",
            "Two Fish",
            "Red Fish",
            "Blue Fish"
          ]
        },
        {
          name: "Arabian Dessert",
          type: "dessert",
        }
      ]
    },
    {
      completed: false,
      number: 3,
      customer: {
        name: "James Madison",
        phoneNumber: "425-911-1212",
        address: "789 Surreal Street NS",
        address2: "House, Your 11111"
      },
      itemList: [
        {
          name: "Pizza Long",
          type: "pizza",
          sauce: "Cheesy Sauce",
          cheese: "Saucy Cheese",
          toppings: [
            "One Fish", "Two Fish", "One Fish", "Two Fish", "One Fish", "Two Fish",
            "One Fish", "Two Fish", "One Fish", "Two Fish", "One Fish", "Two Fish",
            "One Fish", "Two Fish", "One Fish", "Two Fish", "One Fish", "Two Fish",
            "One Fish", "Two Fish", "One Fish", "Two Fish", "One Fish", "Two Fish",
            "One Fish", "Two Fish", "One Fish", "Two Fish", "One Fish", "Two Fish",
            "One Fish", "Two Fish", "One Fish", "Two Fish", "One Fish", "Two Fish",
            "One Fish", "Two Fish", "One Fish", "Two Fish", "One Fish", "Two Fish",
            "One Fish", "Two Fish", "One Fish", "Two Fish", "One Fish", "Two Fish",
          ]
        },
        {
          name: "Fudge Dessert",
          type: "dessert",
        }
      ]
    }
  ];

  // Set index of item to highlight when selecting with arrows.
  // -1 denotes no item currently selected.
  // Bump will bump selected item, or first if none is selected
  const [selectedIndex , setSelctedIndex] = useState(-1);

  const bumpEvent = () => {
    // tag item at index to completed
    alert("Something was bumped.");
  }

  const rightEvent = () => {
    // set orders[selectedIndex] selected state to false
    // if index < numOrders, search for next incomplete order
    // set orders[selectedIndex] selected state to true
    alert("You pressed right arrow.");
  }

  const leftEvent = () => {
    // set orders[selectedIndex] selected state to false
    // if index > 0, setSelectedIndex(selectedIndex - 1);
    // set orders[selectedIndex] selected state to true
    alert("You pressed left arrow.");
  }

  return (
    <main>
      <div className='container'>
        <div className='maketable-wrapper'>
          <section className='maketable-order-list'>
            {dummyOrderList.map(order => (
              <div className='maketable-order-item'>
                <Order order={order} />
              </div>
            ))}
          </section>

          <section className='maketable-button-wrapper'>
            <button className='button' onClick={leftEvent}>◀</button>
            <button className='button' onClick={bumpEvent}>Bump</button>
            <button className='button' onClick={rightEvent}>▶</button>
          </section>

        </div>
      </div> 
    </main>
  )

}

export default MakeTable;