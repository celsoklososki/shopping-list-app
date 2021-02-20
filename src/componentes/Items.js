import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import './AppStyles.css';

function Items({ items, completeItem, removeItem}) {

    return items.map((item, index) => (
        <div 
            id="container"
            className={item.isComplete ? 'item-row complete' : 'item-row'}
            key={index}
        >
            <div key={item.id} onClick={() => completeItem(item.id)}>
                {item.text}
                
            </div>
            <div className="icons">
              <RiCloseCircleLine 
                onClick={() => removeItem(item.id)}
                className="delete-icon"
              />  
            </div>
        </div>
    ));
}

export default Items
