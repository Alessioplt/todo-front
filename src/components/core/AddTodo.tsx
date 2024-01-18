import React, {useState} from "react";
import {Input, Button} from "@nextui-org/react";
import { useDispatch } from 'react-redux';
import {changeTodoNumber} from '../../redux/CategoryTODO';
import {addTODO} from "../../redux/ListTODO";
import {useAppSelector} from "../../redux/hooks";


function AddTodo() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const todoItem = useAppSelector((state) => state.todo)


    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        dispatch(addTODO({ text: title, checked: false}));
        dispatch(changeTodoNumber({id: todoItem.activeCategory, itemNumber: todoItem.todosToShow.length+1}))
        setTitle(''); // Reset the input field
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-row gap-4 items-center">
                <Input type="text" label="Add ListTodo" onChange={(e) => setTitle(e.target.value)}/>
                <Button type="submit" color="primary">Add</Button>
            </div>
        </form>
    );
}

export default AddTodo;