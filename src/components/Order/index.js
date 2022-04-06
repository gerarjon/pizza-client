import React, { Component } from 'react';
import MenuItem from "../components/MenuItem";

class OrderNode {
    state = {
        menuItem: null,
        left: null,
        right: null
    }
}

class Order extends Component {
    state = {
        customer: null,
        root: null, // bst
        itemCount: 0
    }

    insert = (menuItem) => {
        var curr = root;
        var compare = curr.menuItem.compareTo(menuItem);
        // TODO
    }

    remove = (menuItem) => {
        var curr = root;
        var compare = curr.menuItem.compareTo(menuItem);
        // TODO
    }

    size = () => {
        return this.state.itemCount;
    }

    render() {
        return(
            <Container>
            </Container>
        )
    }
}

export default Home;