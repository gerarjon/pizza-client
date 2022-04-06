import React, { Component } from 'react';
import Order from "../components/Order";

class OrderList extends Component {
    state = {
        orders: [],
        history: [],
        historyIndex: 0,
        historyOn: false
    }

    push = (order) => {
        orders.push()
    }

    pop = () => {
        const front = this.state.orders.shift();
        this.state.history.push(front);
        return front;
    }

    peek = () => {
        if (orders.size() == 0) {
            return null; // or error
        }
        return this.state.orders[0];
    }

    history = () => {
        return this.state.history[historyIndex];
    }

    leftArrow = () => {
        if (this.state.historyOn) {

        } else {

        }
    }
    
    rightArrow = () => {
        if (this.state.historyOn) {

        } else {
            
        }
    }

    size = () => {
        return this.orders.left;
    }

    render() {
        return(
            <Container>
            </Container>
        )
    }
}

export default Home;