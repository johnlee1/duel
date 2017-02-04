import React from 'react';
import { LineItem } from './LineItem.js';

export const LineItems = (props) => {
    return (
        <div>
            { props.items.map((item) => <LineItem key={item.id} {...item} />) }
        </div>
    )
}
