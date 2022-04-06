import React, { Component } from 'react';
import customer from "../components/Customer";

class CustomerNode extends Component {
    state = {
        customer: null,
        next: null
    }
}

class CustomerList extends Component {
    state = {
        customers: [],
        count: 0,
        capacity: 47,
        loadFactor: .4
    }

    initialize = () => {
        this.setState({customers: []});
        for (var i = 0; i < capacity; i++) {
            customers.push(null);
        }
    }

    // weak but works
    hash = (phoneNumber) => {
        return phoneNumber % capacity;
    }

    add = (customer) => {
        const index = this.hash(customer.state.phoneNumber);
        var node = new CustomerNode();
        node.setState({customer: customer});
        if (this.state.customers[index]) {
            node.setState({next: this.state.customers[index]});
        }
        this.state.customers[index] = node;
        this.setState({count: this.state.count + 1});
        if (this.state.count > this.state.loadFactor * this.state.capacity) {
            this.rehash();
        }
    }

    get = (phoneNumber) => {
        const index = hash(phoneNumber);
        var curr = this.state.customers[index];
        while (curr) {
            if (curr.state.customer.state.phoneNumber == phoneNumber) {
                return curr.state.customer;
            }
            curr = curr.state.next;
        }
        return null; // customer not found
    }

    nextPrime = (min) => {
        if (min % 2 == 0) {
            return this.nextPrime(min + 1);
        } else {
            for (var i = 3; i * i < min; i++) {
                if (min % i == 0) {
                    return this.nextPrime(min + 2);
                }
            }
            return min;
        }
    }

    rehash = () => {
        const oldCapacity = this.state.capacity;
        const oldCustomers = this.state.customers;
        this.setState({capacity: this.nextPrime(oldCapacity * 2)})
        this.initialize();
        for (var i = 0; i < oldCapacity; i++) {
            curr = oldCustomers.state.customers[i];
            while (curr) {
                this.add(curr.state.customer);
            }
        }
    }

}

export default Home;