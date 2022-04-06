import React, { Component } from 'react';
import MenuItem from "../components/MenuItem";

class Order extends Component {
    state = {
        customer: null,
        menuItems: [], // bst
    }

    insertHelper = (menuItem, left, right) => {
        const mid = Math.floor((left + right) / 2);
        const compare = this.state.menuItems[mid].compareTo(menuItem);
        if (left > right) {
            menuItems.splice(left, 0, menuItem);
        } else if (compare == 0) {
            var item = this.state.menuItems[mid];
            item.changeState({count: item.state.count + 1});
        } else if (compare > 0) {
            this.insertHelper(menuItem, mid + 1, right);
        } else {
            this.insertHelper(menuItem, min, mid - 1);
        }
    }

    insert = (menuItem) => {
        this.insert(menuItem, 0, this.state.menuItems.size());

    }

    removeHelper = (menuItem, left, right) => {
        const mid = Math.floor((left + right) / 2);
        const compare = this.state.menuItems[mid].compareTo(menuItem);
        if (left > right) {
            return false;
        } else if (compare == 0) {
            var item = this.state.menuItems[mid];
            if (item.state.count > 1) {
                item.changeState({count: item.state.count - 1});
            } else {
                this.state.menuItems.splice(mid, 1);
            }
            return true;
        } else if (compare > 0) {
            return this.removeHelper(menuItem, mid + 1, right);
        } else {
            return this.removeHelper(menuItem, min, mid - 1);
        }
    }

    remove = (menuItem) => {
        return this.remove(menuItem, 0, this.state.menuItems.size());
    }

    render() {
        return(
            <Container>
            </Container>
        )
    }
}

export default Home;