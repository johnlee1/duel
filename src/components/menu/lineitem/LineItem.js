import React from 'react';

export const LineItem = (props) => {
    return (
        <li>
            ${props.cost}, {props.expense}
        </li>
    )
}
