import {Button, Checkbox} from "@nextui-org/react";
import TrashIcon from "../../icons/trash";
import React from "react";
import {checkTODO, deleteTodo} from "../../redux/ListTODO";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import DeleteTodoSingle from "../core/DeleteTodoSingle";

interface todo {
    id: string;
    text: string;
    checked: boolean;
    category: string;
}

function ItemTodo({ item }: { item: todo }) {
    const todoItem = useAppSelector((state) => state.todo)
    const dispatch = useAppDispatch()
    const setIsSelected = () => {
        //dispatch(checkTODO(item.id))
    };

    const deleteItem = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log("deleting todo", item)
        //dispatch(deleteTodo(item.id))
    };

    return (
        <div className="flex place-content-between flex-row">
            <Checkbox onValueChange={() => setIsSelected()}
                      defaultSelected={item.checked}
                      lineThrough>{item.text}</Checkbox>
            <form onSubmit={deleteItem}>
                <DeleteTodoSingle/>
            </form>
        </div>
    );
}

export default ItemTodo;