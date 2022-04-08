import React, { useState, useRef, useContext, useEffect } from 'react';
import Order from "../components/Order";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [historyOn, setHistoryOn] = useState(false);

    push = (order) => {
        orders.push()
    }

    pop = () => {
        const front = orders.shift();
        history.push(front);
        return front;
    }

    peek = () => {
        if (orders.size() == 0) {
            return null; // or error
        }
        return orders[0];
    }

    history = () => {
        return history[historyIndex];
    }

    leftArrow = () => {
        if (historyOn) {

        } else {

        }
    }
    
    rightArrow = () => {
        if (historyOn) {

        } else {
            
        }
    }

    size = () => {
        return orders.left;
    }
}

export default Home;