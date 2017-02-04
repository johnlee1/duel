import React, { Component } from 'react';
import { LineItems, LineItemForm } from './lineitem/index.js';

class Menu extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {id: 1, expense: "line item 1", cost: 10}, 
                {id: 2, expense: "line item 2", cost: 11}, 
            ],
            expense: '',
            cost: '',
            total: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        });
    }

    render() {

        return (
            <div className="App container">
                <h1>Duel</h1>
                <LineItems items={this.state.items} />
                <LineItemForm handleInputChange={this.handleInputChange} 
                              expense={this.state.expense} 
                              cost={this.state.cost} />
            </div>
        );
    }
}

export default Menu;
