import React from 'react';

export interface Item {
    name: string;
    isCompleted: boolean;
}

interface ItemListProps {
    items: Item[];
}

export const ItemList = ({items}: ItemListProps) => (
    <ul>
        {
            items.map(item => (
                <li key={item.name}>
                    <span>{item.name}</span>
                    <button>
                        {item.isCompleted ? 'Incomplete' : 'Completed'}
                    </button>
                    <button>
                        Remove
                    </button>
                </li>
            ))
        }
    </ul>
);

export default ItemList;