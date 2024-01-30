import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "@nextui-org/react";
import {addCategoryApi, deleteCategoryApi} from "../../redux/CategoryApi";

interface CategoryFormProps {
    onClose: () => void;
}

function ConfirmationForm({ onClose }: CategoryFormProps) {
    const dispatch = useDispatch<any>();
    const [title, setTitle] = useState("");

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        dispatch(deleteCategoryApi(title));
        setTitle("");
        onClose();
    };

    return (
        <div>
            Are you sure you want to delete this category
            <form onSubmit={handleSubmit} className="flex content-between">
                <Button type="submit" color="primary">
                    Yes
                </Button>
                <Button type="submit" color="primary">
                    No
                </Button>
            </form>
        </div>

    );
}

export default ConfirmationForm;
