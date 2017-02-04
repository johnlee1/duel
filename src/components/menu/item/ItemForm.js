import React from 'react'

export const ItemForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="number" step="any" onChange={props.handleInputChange} name="cost" value={props.cost} />
            <input type="text" onChange={props.handleInputChange} name="expense" value={props.expense} />
            <input type="submit" className="submitBtn" />
        </form>
    )
}

ItemForm.PropTypes = {
    handleInputChange: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
}
