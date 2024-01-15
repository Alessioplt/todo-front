import React from "react";
import {Card, CardBody, CardFooter, Divider, Link, Button, Checkbox} from "@nextui-org/react";
import TrashIcon from "../../icons/trash";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {addCategory} from "../../redux/CategoryTODO";
import {addTODO, checkTODO} from "../../redux/ListTODO";

interface todo {
    name: number;
    checked: boolean;
}

function DeleteTodoSingle() {
    interface todoInterface {
        name: string;
        checked: boolean;
    }
    const todoItem = useAppSelector((state) => state.todo)
    const dispatch = useAppDispatch()

    const setIsSelected = (id: number) => {
        dispatch(checkTODO(id))
    };


    return (
        <Button isIconOnly variant="light" aria-label="Like">
            <TrashIcon />
        </Button>
    );
}

export default DeleteTodoSingle;