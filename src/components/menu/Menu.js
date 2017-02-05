import React, { Component } from 'react'
import { ExpenseBoard } from './expense-board/index.js'
import { SummaryBoard } from './summary-board/index.js'
import { addItem, generateId } from './../../lib/item-helpers.js' 
import { loadItems, createItem } from './../../lib/item-service.js'
import './Menu.css'

class Menu extends Component {

    state = {
            items: [],
            cost: '',
            expense: '',
            totalExpenses: '0',
    }

    componentDidMount() {
        loadItems().then(items => this.setState({items}))
    }

    handleInputChange = (event) => {
        let value = event.target.value
        const name = event.target.name
        this.setState({[name]: value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const newId = generateId()
        const newItem = {id: newId, 
                         cost: this.state.cost, 
                         expense: this.state.expense}
        const updatedItems = addItem(this.state.items, newItem)
        const totalExpenses = Number(this.state.totalExpenses) + Number(this.state.cost)
        this.setState({
            items: updatedItems,
            cost: '',
            expense: '',
            totalExpenses: totalExpenses,
        })
        createItem(newItem)
    }

    handleEmptySubmit = (evt) => {
        evt.preventDefault()
    }

    render() {
        const submitHandler = this.state.expense ? this.handleSubmit : this.handleEmptySubmit
        return (
            <div className="App container">
                <h1>duel</h1>
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <ExpenseBoard items={this.state.items} 
                                      handleInputChange={this.handleInputChange}
                                      handleSubmit={submitHandler}
                                      expense={this.state.expense} 
                                      cost={this.state.cost} />
                    </div>
                    <div className="col-md-4 offset-md-2">
                        <SummaryBoard totalExpenses={this.state.totalExpenses} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu
