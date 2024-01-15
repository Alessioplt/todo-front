import {Button, Checkbox} from "@nextui-org/react";
import TrashIcon from "../../icons/trash";
import React from "react";
import {checkTODO, deleteTodo} from "../../redux/ListTODO";
import {useAppDispatch} from "../../redux/hooks";

interface todo {
    id: number;
    text: string;
    checked: boolean;
    category: number;
}

function ItemTodo({ item }: { item: todo }) {
    const dispatch = useAppDispatch()
    const setIsSelected = () => {
        dispatch(checkTODO(item.id))
    };

    const deleteItem = () => {
        dispatch(deleteTodo(item.id))
    };

    return (
        <div className="flex place-content-between flex-row">
            <Checkbox onValueChange={() => setIsSelected()}
                      defaultSelected={item.checked}
                      lineThrough>{item.text}</Checkbox>
            <form onSubmit={() => deleteItem()}>
                <Button isIconOnly variant="light" aria-label="Like">
                    <TrashIcon/>
                </Button>
            </form>

        </div>
    );
}

export default ItemTodo;