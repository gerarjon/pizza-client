import React, { useState } from 'react';
import './style.css';

const MakeTable = () => {
  const customers = [
    {
      name: "customer 1",
      phoneNumber: "425-777-7777",
      address: "pants street",
      order: ["pizza", "dessert"]
    },
    {
      name: "customer 2",
      phoneNumber: "425-777-7777",
      address: "pants street 69",
      order: ["feet"]
    },
    {
      name: "customer 3",
      phoneNumber: "425-777-7777",
      address: "pants street",
      order: ["piss"]
    },
    {
      name: "customer 4",
      phoneNumber: "425-777-7777",
      address: "pants islandt",
      order: ["pizza", "drink"]
    },
    {
      name: "customer 5",
      phoneNumber: "425-777-7777",
      address: "mom house street",
      order: ["pizza", "dessert", "pizza", "pizza"]
    },
    {
      name: "customer 6",
      phoneNumber: "425-777-7777",
      address: "dad house mansion bed",
      order: ["pizza", "dessert", "pizza", "feet", "feet"]
    },
  ] 

  /** Set index of item to highlight when selecting with arrows.
   * -1 denotes no item currently selected.
   * Bump will bump selected item, or first if none is selected
   **/
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
            { customers.map( customer => (
              <div className='maketable-order-item'>
                <ul>
                  {customer.name}
                  <li>
                    Phone Number: {customer.phoneNumber}
                  </li>
                  <li>
                    Address: {customer.address}
                  </li>
                  <ol>
                    Order:
                    {customer.order.map(item => (
                      <li>
                        {item}
                      </li>
                    ))}
                  </ol>
                </ul>
              </div>
            ))}
            <div className='maketable-order-item'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque voluptates rem labore beatae sed dignissimos illum! Ipsum nisi distinctio voluptatibus repellat commodi, modi obcaecati at. Et suscipit excepturi dignissimos.

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque voluptates rem labore beatae sed
            </div>
            
            <div className='maketable-order-item'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque voluptates rem labore beatae sed dignissimos illum!
            </div>
            
            
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