// Assignment 2, Tasks 2 and 3
import ShoppingCartReducer from "./ShoppingCartReducer";
import React, { useReducer, useState } from "react";

const ShoppingCart: React.FC = () => {
    const [state, dispatch] = useReducer(ShoppingCartReducer, [])
    const [itemName, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState(0)

    const addItem = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem = { id: Date.now(), name: itemName, price: itemPrice };
        dispatch({ type: 'ADD_ITEM', payload: newItem })
        setItemName('');
        setItemPrice(0);
    };

    const removeItem = (itemId: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId})
    };
    

    return (
        <div>
            <form onSubmit={addItem}>
                <input 
                 type="text"
                 value={itemName}
                 onChange={(e) => setItemName(e.target.value)}
                 placeholder="Enter item name"
                />
                <input
                 type="number"
                 value={itemPrice}
                 onChange={(e) => setItemPrice(Number(e.target.value))}
                 placeholder="Enter item price"
                />
                <button type="submit">Submit</button>
            </form>

            <ul>
                {state.length > 0? state.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeItem(item.id)}>🗑️</button>
                    </li>
                )) : (
                <p>No items in the cart</p>
            )}
            </ul>
        </div>
    )
}

export default ShoppingCart;