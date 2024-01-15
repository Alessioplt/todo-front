import React from "react";
import {Card, CardBody, CardFooter, Divider, Link, Button, Checkbox, Input} from "@nextui-org/react";
import TrashIcon from "../../icons/trash";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {addCategory} from "../../redux/CategoryTODO";
import {addTODO, checkTODO, deleteTodo} from "../../redux/ListTODO";
import ItemTodo from "./ItemTodo";

interface todo {
    id: number;
    text: string;
    checked: boolean;
    category: number;
}

function ListTodo() {
    interface todoInterface {
        name: string;
        checked: boolean;
    }
    const todoItem = useAppSelector((state) => state.todo)


    return (
        <Card className="max-w-[400px]">
            <CardBody>
                {todoItem.todosToShow.map((todo) => (
                    <ItemTodo item={todo} />
                ))}
            </CardBody>
            <Divider/>
            <CardFooter>
                <Link
                    href="">
                    Delete Todo's dones
                </Link>
            </CardFooter>
        </Card>
    );
}

export default ListTodo;