import React, {useState} from 'react'
import './AppStyles.css';

function ShoppingListForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const  handleSubmit = e =>{
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    return (
        <div className="Form">
            <form id="shopping-list-form" onSubmit={handleSubmit}> 
            <input 
                type="text" 
                placeholder="Add an item" 
                value={input} 
                name="text" 
                className="shopping-list-input"
                onChange={handleChange}
                autoComplete="off"
            />
            <button className="shopping-list-button">Add to Shopping List</button>
        </form>
        </div>
    )
}

export default ShoppingListForm
