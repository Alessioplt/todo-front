import React from "react";
import {Button, Link, Modal, ModalContent, useDisclosure} from "@nextui-org/react";
import ConfirmationForm from "../form/ConfirmationForm";
import TodoForm from "../form/TodoForm";

function TodoAdd() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Link onPress={onOpen}>Add Todo</Link>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => <TodoForm onClose={onClose} />}
                </ModalContent>
            </Modal>
        </>
    );
}

export default TodoAdd;