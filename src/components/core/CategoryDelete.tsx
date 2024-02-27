import React from "react";
import {Button, Modal, ModalContent, useDisclosure} from "@nextui-org/react";
import CategoryForm from "../form/CategoryForm";
import ConfirmationForm from "../form/ConfirmationForm";

function CategoryDelete() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>Delete</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => <ConfirmationForm onClose={onClose} />}
                </ModalContent>
            </Modal>
        </>
    );
}

export default CategoryDelete;