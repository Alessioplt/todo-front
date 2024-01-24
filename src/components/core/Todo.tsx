import React from "react";
import {Button, Card, CardBody, CardFooter, Divider, Link, Modal, ModalContent, useDisclosure} from "@nextui-org/react";
import ListTodo from "../dashboard/ListTodo";
import TodoDeleteDone from "../dashboard/TodoDeleteDone";
import TodoAdd from "../dashboard/TodoAdd";

function Todo() {
    return (
        <Card className="max-w-[400px]">
            <ListTodo/>
            <Divider/>
            <CardFooter>
                <TodoDeleteDone/>
                <Divider orientation="vertical" />
                <TodoAdd/>
            </CardFooter>
        </Card>
    );
}

export default Todo;