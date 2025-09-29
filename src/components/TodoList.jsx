import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup  from 'react-bootstrap/ListGroup';

import TodoItem from './TodoItem';

let initialList = [
    { id: 1, text: 'Milk the house', done: true },
    { id: 2, text: 'Clean the milk', done: false },
    { id: 3, text: 'React create app todo', done: false }
];

const STORAGE_KEY = 'todo:list';

function loadInitialList(){
    const raw = localStorage.getItem(STORAGE_KEY); // Will grab the storage if it exists.
    if (!raw) return initialList; // Or instead it'll grab the initialised, hardcoded list.
    return JSON.parse(raw);
}

export default function TodoList() {
    const [list, setList] = useState(loadInitialList);
    const [textInput, setTextInput] = useState('');

    //Whenever the list is updated, persist to local storage.
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }, [list]);

    const handleChange = e => {
        setTextInput(e.target.value);
    };

    const addTodoItem = () => {
        if (textInput.length > 3) {
            let newTodo = {
                id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
                text: textInput,
                done: false
            };
            setList([...list, newTodo]);
            setTextInput("");
        }
    };

    const markAsDone = (id) => {
        const newList = list.map((item) => {
            if (item.id === id) {
                return { ...item, done: true };
            }
            return item;
        });
        setList(newList);
    };

    const deleteTodoItem = (id) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    };

    let todoItems = list.map((item, index) => {
        return (
            <TodoItem
                key={index}
                markAsDone={markAsDone}
                deleteTodoItem={deleteTodoItem}
                todo={item}
            />
        );
    });

    return (
        <Card>
            <Card.Header>Josh's to-do list</Card.Header>
            <Card.Body>
                <ListGroup>
                    {todoItems}
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <input type='text' onChange={handleChange} value={textInput} />
                <Button onClick={addTodoItem} variant='primary' className='float-end'>Add</Button>
            </Card.Footer>
        </Card>
    );
};