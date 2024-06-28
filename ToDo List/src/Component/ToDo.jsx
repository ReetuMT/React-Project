import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ToDo({ input, setInput, todo, setTodo, todoedit, setEditlist }) {
    const updateTodo = (title, id, completed) => {
        const newTodo = todo.map((item) =>
            item.id === id ? { title, id, completed } : item
        );
        setTodo(newTodo);
        setEditlist(null); 
    };

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    useEffect(() => {
        if (todoedit) {
            setInput(todoedit.title);
        } else {
            setInput("");
        }
    }, [setInput, todoedit]);

    const onSubmitChange = (event) => {
        event.preventDefault();
        if (!todoedit) {
            setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
            setInput('');
        } else {
            updateTodo(input, todoedit.id, todoedit.completed);
        }
    };

    return (
        <div className='Wrapper'>
            <h1 style={{ color: 'white', fontSize: 20 }}>To-Do List</h1>
            <form onSubmit={onSubmitChange}>
                <input
                    type='text'
                    className='inputdata'
                    placeholder='Enter your choice'
                    value={input}
                    required
                    onChange={onInputChange}
                />
                <button className='button-add' type='submit'>
                    {todoedit ? "Ok" : "Add"}
                </button>
            </form>
        </div>
    );
}

export default ToDo;
