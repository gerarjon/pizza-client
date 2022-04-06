import React, { Component } from 'react';
import Order from "../components/Order";

class OrderListNode {
    state = {
        order: null,
        next: null
    }

    // this looks sketchy
    OrderListNode(order, next) {
        this.state.order = order;
        this.state.next = next;
    }
}

class OrderList extends Component {
    state = {
        front: null,
        back: null,
        orderCount: 0
    }

    push = (order) => {
        if (!this.state.front) {
            this.state.front = new OrderListNode(order, this.state.front);
            this.state.back = this.state.front;
        } else {
            this.state.back.next = new OrderListNode(order, null);
            this.state.back = this.state.back.next;
        }
        this.state.orderCount++;
    }

    pop = () => {
        if (this.state.front && this.state.front == this.state.back) {
            this.state.front = null;
            this.state.back = null;
            this.state.orderCount--;
        } else if (this.state.front) {
            var order = this.state.front.order;
            this.state.front = this.state.front.next;
            this.state.orderCount--;
            return order;
        }
    }

    peek = () => {
        return this.state.front.order;
    }

    size = () => {
        return this.state.orderCount;
    }

    render() {
        return(
            <Container>
            </Container>
        )
    }
}

export default Home;