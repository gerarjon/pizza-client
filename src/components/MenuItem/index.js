import React, { useState, useRef, useContext, useEffect } from 'react';


const MenuItem = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState(''); // pizza, side, desert
    const [count, setCount] = useState(1);
    const [ingredients, setIngredients] = useState(new Map()); // for extra ingredients, etc

    add = (ingredient) => {
        const count = ingredients.get(ingredient);
        ingredients.set(ingredient, count + 1);
    }

    remove = (ingredient) => {
        const count = ingredients.get(ingredient);
        if (count == 1) {
            ingredients.delete(ingredient);
        } else if (count > 1) {
            ingredients.set(ingredient, count + 1);
        }
    }

    getIngredients = () => {
        list = [];
        const iterator = ingredients.entries();
        var curr = iterator.next();
        while (!curr.done) {
            for (var i = 0; i < curr.value[1]; i++) {
                list.push(curr.value[0]);
            }
            curr = iterator.next();
        }
        return list; // array of ingredients, with duplicates
    }

    // temporary, depending on if we include pizza size, etc
    compareTo = (otherItem) => {
        if (type != otherItem.type) {
            return type > otherItem.type ? 1 : -1;
        } else if (name != otherItem.name) {
            return name > otherItem.name ? 1 : -1;
        } else {
            return 0;
        }
    }
}

export default Home;