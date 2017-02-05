import React from 'react'

export const SummaryBoard = (props) => {
    return (
        <div>
            <h2 className="center">Total Expenses</h2>
            <div className="big-number">${props.totalExpenses}</div>
        </div>
    )
}
