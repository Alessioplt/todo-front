import {Button, Input} from "@nextui-org/react";
import React, {useState} from "react";
import {addCategory} from "../../redux/CategoryTODO";
import {useDispatch} from "react-redux";

function CategoryForm() {
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        dispatch(addCategory({id: Date.now(), title: title, itemNumber: 0})); // Use a unique ID for the category
        setTitle(''); // Reset the input field
    };

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                label="Category name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button type="submit" color="primary">Add</Button>
        </form>

    );
}

export default CategoryForm;

