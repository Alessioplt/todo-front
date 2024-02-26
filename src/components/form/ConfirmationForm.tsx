import React  from "react";
import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import {deleteCategoryApi} from "../../redux/CategoryApi";
import {useAppSelector} from "../../redux/hooks";

interface CategoryFormProps {
    onClose: () => void;
}

function ConfirmationForm({ onClose }: CategoryFormProps) {
    const dispatch = useDispatch<any>();
    const activeCategory = useAppSelector((state) => state.todo.activeCategory);

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        console.log("Deleting category named: ", activeCategory);
        dispatch(deleteCategoryApi(activeCategory));
        onClose();
    };

    return (
        <div>
            <text style={{ margin: '10px', padding: '10px' }}>Are you sure you want to delete this category</text>
            <form onSubmit={handleSubmit} className="flex content-between">
                <Button type="submit" color="primary" style={{ margin: '10px', padding: '10px' }}>
                    Yes
                </Button>
                <Button type="submit" color="primary" style={{ margin: '10px', padding: '10px' }}>
                    No
                </Button>
            </form>
        </div>

    );
}

export default ConfirmationForm;
