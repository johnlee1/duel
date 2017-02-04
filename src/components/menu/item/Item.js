import React from 'react'

export const Item = (props) => {
    return (
        <li>
            ${props.cost}, {props.expense}
        </li>
    )
}

Item.propTypes = {
    cost: React.PropTypes.number.isRequired,
    expense: React.PropTypes.string.isRequired,
}
