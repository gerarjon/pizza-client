import React, { Component } from 'react';


class MenuItem extends Component {
    state = {
        name: '',
        type: '', // pizza, side, desert
        count: 1,
        ingredients: new Map(), // for extra ingredients, etc
    }

    add = (ingredient) => {
        const count = this.state.ingredients.get(ingredient);
        this.state.ingredients.set(ingredient, count + 1);
    }

    remove = (ingredient) => {
        const count = this.state.ingredients.get(ingredient);
        if (count == 1) {
            this.state.ingredients.delete(ingredient);
        } else if (count > 1) {
            this.state.ingredients.set(ingredient, count + 1);
        }
    }

    getIngredients = () => {
        list = [];
        const iterator = this.state.ingredients.entries();
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
        if (this.state.type != otherItem.state.type) {
            return this.state.type > otherItem.state.type ? 1 : -1;
        } else if (this.state.name != otherItem.state.name) {
            return this.state.name > otherItem.state.name ? 1 : -1;
        } else {
            return 0;
        }
    }

    render() {
        return(
            <Container>
            </Container>
        )
    }
}

export default Home;