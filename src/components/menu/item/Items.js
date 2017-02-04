import React from 'react'
import { Item } from './Item.js'

export const Items = (props) => {
    return (
        <div>
            { props.items.map((item) => <Item key={item.id} {...item} />) }
        </div>
    )
}
