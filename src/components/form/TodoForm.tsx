import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Button, Input } from "@nextui-org/react";
import {addTodoApi} from "../../redux/TodoApi";
import {useAppSelector} from "../../redux/hooks";

interface CategoryFormProps {
    onClose: () => void;
}

function TodoForm({ onClose }: CategoryFormProps) {
    const dispatch = useDispatch<any>();
    const [title, setTitle] = useState("");
    const [description, setDescritpion] = useState("");
    const activeCategory = useAppSelector((state) => state.todo.activeCategory);
    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        dispatch(addTodoApi({title, description, status: "0", categoryId: activeCategory}));
        setTitle("");
        setDescritpion("");
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                label="Todo name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                type="text"
                label="Todo Description"
                value={description}
                onChange={(e) => setDescritpion(e.target.value)}
            />
            <Button type="submit" color="primary">
                Add
            </Button>
        </form>
    );
}

export default TodoForm;
