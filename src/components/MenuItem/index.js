import React, { Component } from 'react';


class MenuItem extends Component {
    state = {
        name: '',
        type: '', // pizza, side, desert
        ingredients: new Map(), // for extra ingredients, etc
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