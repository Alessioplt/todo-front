import React from "react";
import {Card, CardBody, CardFooter, Divider, Link, Button, Checkbox} from "@nextui-org/react";
import TrashIcon from "../../icons/trash";

interface todo {
    name: number;
    checked: boolean;
}

function DeleteTodoSingle() {

    return (
        <Button type="submit" isIconOnly variant="light" aria-label="Like">
            <TrashIcon />
        </Button>
    );
}

export default DeleteTodoSingle;