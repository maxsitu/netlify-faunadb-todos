import React, { MouseEvent } from 'react';

export interface Item {
    name: string;
    isCompleted: boolean;
}

interface ItemListProps {
    items: Item[];
}

export const ItemList = ({ items }: ItemListProps) => {
    const [todoMsg, setTodoMsg] = React.useState<string>('');
    const handleClick = async (e: MouseEvent) => {
        e.preventDefault();

        const resp = await fetch('/.netlify/functions/fetchTodo');
        const { message } = await resp.json();
        setTodoMsg(message);
    };

    const unsetTodoMsg = (e: MouseEvent) => {
        e.preventDefault();

        setTodoMsg('');
    };

    return (
        <ul>
            <label>{todoMsg}</label>
            {
                items.map(item => (
                    <li key={item.name}>
                        <span>{item.name}</span>
                        <button onClick={handleClick}>
                            {item.isCompleted ? 'Incomplete' : 'Completed'}
                        </button>
                        <button onClick={unsetTodoMsg}>
                            Remove
                    </button>
                    </li>
                ))
            }
        </ul>
    )
};

export default ItemList;