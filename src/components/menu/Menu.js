import React, { Component } from 'react'
import { Items, ItemForm } from './item/index.js'
import { addItem, generateId } from '../../lib/item-helpers.js' 
import './Menu.css'

class Menu extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
            cost: '',
            expense: '',
            total: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
    }

    handleInputChange(event) {
        let value = event.target.value
        const name = event.target.name
        if (name === 'cost') value = Number(value)
        this.setState({[name]: value})
    }

    handleSubmit(evt) {
        evt.preventDefault()
        const newId = generateId()
        const newItem = {id: newId, 
                         cost: this.state.cost, 
                         expense: this.state.expense}
        const updatedItems = addItem(this.state.items, newItem)
        this.setState({
            items: updatedItems,
            cost: '',
            expense: '',
        })
    }

    handleEmptySubmit(evt) {
        evt.preventDefault()
    }

    render() {
        const submitHandler = this.state.expense ? this.handleSubmit : this.handleEmptySubmit
        return (
            <div className="App container">
                <h1>Duel</h1>
                <Items items={this.state.items} />
                <ItemForm handleInputChange={this.handleInputChange}
                          handleSubmit={submitHandler}
                          expense={this.state.expense} 
                          cost={this.state.cost} />
            </div>
        );
    }
}

export default Menu
