import React from "react";
import {Card, CardHeader, CardBody, Divider, Input, Button} from "@nextui-org/react";
import ListTodo from "../dashboard/ListTodo";
import AddTodo from "./AddTodo";

function Todo() {
    return (
        <Card className="max-w-[75%]">
            <CardHeader>
                <div className="w-full flex flex-col gap-4 items-center">
                <h1>TODO</h1>
                <Input type="text" label="Search..."></Input>
                    <AddTodo></AddTodo>
                </div>
            </CardHeader>
            <CardBody>
                <ListTodo></ListTodo>
            </CardBody>
            <Divider/>
        </Card>
    );
}

export default Todo;