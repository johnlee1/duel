import React from 'react';

export const LineItemForm = (props) => {
    return (
        <form>
            <input type="text" onChange={props.handleInputChange} name="expense" />
            <input type="number" onChange={props.handleInputChange} name="cost" />
            <input type="submit" />
        </form>
    )
}
