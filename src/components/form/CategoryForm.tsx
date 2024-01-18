import {Button, Input} from "@nextui-org/react";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addCategoryApi} from "../../redux/CategoryApi";

function CategoryForm() {
    const dispatch = useDispatch<any>()
    const [title, setTitle] = useState('');


    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        dispatch(addCategoryApi(title));
        setTitle(''); // Reset the input field
    };
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

