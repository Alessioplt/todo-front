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