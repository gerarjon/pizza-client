import React, { useState, useRef, useContext, useEffect } from 'react';
import MenuItem from "../components/MenuItem";

const Order = () => {
    const [customer, setCustomer] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    insertHelper = (menuItem, left, right) => {
        const mid = Math.floor((left + right) / 2);
        const compare = menuItems[mid].compareTo(menuItem);
        if (left > right) {
            menuItems.splice(left, 0, menuItem);
        } else if (compare == 0) {
            var item = menuItems[mid];
            item.setCount(item.count + 1);
        } else if (compare > 0) {
            insertHelper(menuItem, mid + 1, right);
        } else {
            insertHelper(menuItem, min, mid - 1);
        }
    }

    insert = (menuItem) => {
        insert(menuItem, 0, menuItems.size());

    }

    removeHelper = (menuItem, left, right) => {
        const mid = Math.floor((left + right) / 2);
        const compare = menuItems[mid].compareTo(menuItem);
        if (left > right) {
            return false;
        } else if (compare == 0) {
            var item = menuItems[mid];
            if (item.count > 1) {
                setCount(item.count - 1);
            } else {
                menuItems.splice(mid, 1);
            }
            return true;
        } else if (compare > 0) {
            return removeHelper(menuItem, mid + 1, right);
        } else {
            return removeHelper(menuItem, min, mid - 1);
        }
    }

    remove = (menuItem) => {
        return remove(menuItem, 0, menuItems.size());
    }
}

export default Home;