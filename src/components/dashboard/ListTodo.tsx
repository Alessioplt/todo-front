import React, {useEffect} from "react";
import {Card, CardBody, CardFooter, Divider, Link, Button, Checkbox, Input} from "@nextui-org/react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import ItemTodo from "./ItemTodo";
import {fetchTODOByCategoryID} from "../../redux/TodoApi";

interface todo {
    id: string;
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
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (sessionStorage.getItem('token') === null) {
            console.log("not logged in")
        }
        else {
            dispatch(fetchTODOByCategoryID(todoItem.activeCategory))
        }
    }, []);


    return (
        <CardBody>
            {todoItem.todosToShow.map((todo) => (
                <ItemTodo item={todo} />
            ))}
        </CardBody>
    );
}

export default ListTodo;