import React, {useState} from 'react'
import Items from './Items'
import ShoppingListForm from './ShoppingListForm'

function ShoppingList() {
    const [items, setItems] = useState([])

    const addItem = item => {
        if(!item.text || /^\s*$/.test(item.text)){
            return
        }

        const newItems = [item, ...items]

        setItems(newItems)
    };

    const removeItem = id => {
        const removeArray = [...items].filter(item => item.id !== id)

        setItems(removeArray);
    }

    const completeItem = id => {
        let updatedItems = items.map(item => {
            if(item.id === id ) {
                item.isComplete = !item.isComplete;
            }
            return item;
        });
        setItems(updatedItems);
    };


    return (
        <div>
            <ShoppingListForm onSubmit={addItem} />
            <Items items={items} completeItem={completeItem} removeItem={removeItem}/>
        </div>
    )
}

export default ShoppingList
