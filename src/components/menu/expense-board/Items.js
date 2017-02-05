import React from 'react'
import { Item } from './Item.js'

export const Items = (props) => {
    return (
        <table className="table">
            <tbody>
                { props.items.map((item) => <Item key={item.id} {...item} />) }
            </tbody>
        </table>
    )
}
