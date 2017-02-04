import { addItem } from './item-helpers.js'

test('addItem should add the passed item to the items list', () => {
    const startItems = [
        {id: 1, expense: "line item 1", cost: 10}, 
        {id: 2, expense: "line item 2", cost: 11}, 
    ]
    const newItem = {id: 3, expense: "line item 3", cost: 12}
    const expected = [
        {id: 1, expense: "line item 1", cost: 10}, 
        {id: 2, expense: "line item 2", cost: 11}, 
        {id: 3, expense: "line item 3", cost: 12}, 
    ]
    const result = addItem(startItems, newItem)
    expect(result).toEqual(expected)
})

test('addItem should not mutate the existing items list', () => {
    const startItems = [
        {id: 1, expense: "line item 1", cost: 10}, 
        {id: 2, expense: "line item 2", cost: 11}, 
    ]
    const newItem = {id: 3, expense: "line item 3", cost: 12}
    const expected = [
        {id: 1, expense: "line item 1", cost: 10}, 
        {id: 2, expense: "line item 2", cost: 11}, 
        {id: 3, expense: "line item 3", cost: 12}, 
    ]
    const result = addItem(startItems, newItem)
    expect(result).not.toBe(startItems)
})
