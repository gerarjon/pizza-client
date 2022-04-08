import React, { useState, useRef, useContext, useEffect } from 'react';
import customer from "../components/Customer";

const CustomerNode = () => {
    const [customer, setCustomer] = useState(null);
    const [next, setNext] = useState(null);
}

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [count, setCount] = useState(0);
    const [capacity, setCapacity] = useState(47);
    const [loadFactor, setLoadFactor] = useState(.4);

    initialize = () => {
        setCustomers([]);
        for (var i = 0; i < capacity; i++) {
            customers.push(null);
        }
    }

    // weak but works
    hash = (phoneNumber) => {
        return phoneNumber % capacity;
    }

    add = (customer) => {
        const index = hash(customer.phoneNumber);
        var node = new CustomerNode();
        node.setCustomer(customer);
        if (customers[index]) {
            node.setNext(customers[index]);
        }
        setCustomers(customers.splice(index, 1, node));
        setCount(count + 1);
        if (count > loadFactor * capacity) {
            rehash();
        }
    }

    get = (phoneNumber) => {
        const index = hash(phoneNumber);
        var curr = customers[index];
        while (curr) {
            if (curr.customer.phoneNumber == phoneNumber) {
                return customer;
            }
            curr = curr.next;
        }
        return null; // customer not found
    }

    nextPrime = (min) => {
        if (min % 2 == 0) {
            return nextPrime(min + 1);
        } else {
            for (var i = 3; i * i < min; i++) {
                if (min % i == 0) {
                    return nextPrime(min + 2);
                }
            }
            return min;
        }
    }

    rehash = () => {
        const oldCapacity = capacity;
        const oldCustomers = customers;
        setCapacity(nextPrime(oldCapacity * 2));
        initialize();
        for (var i = 0; i < oldCapacity; i++) {
            curr = oldCustomers.customers[i];
            while (curr) {
                add(curr.customer);
            }
        }
    }

}

export default Home;