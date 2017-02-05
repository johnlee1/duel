import React from 'react'

export const Item = (props) => {
    return (
        <tr>
            <td>${props.cost}</td>
            <td>{props.expense}</td>
        </tr>
    )
}

Item.propTypes = {
    cost: React.PropTypes.string.isRequired,
    expense: React.PropTypes.string.isRequired,
}
