import React from 'react'
import { Items, ItemForm } from './index.js'

export const ExpenseBoard = (props) => {
    return (
        <div>
            <h2 className="center">Line Items</h2>
            <Items items={props.items} />
            <ItemForm handleInputChange={props.handleInputChange}
                      handleSubmit={props.handleSubmit}
                      expense={props.expense} 
                      cost={props.cost} />
        </div>
    )
}
