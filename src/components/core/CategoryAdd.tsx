import React from "react";
import {Button, Modal, ModalContent, useDisclosure} from "@nextui-org/react";
import CategoryForm from "../form/CategoryForm";

function CategoryAdd() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => <CategoryForm onClose={onClose} />}
                </ModalContent>
            </Modal>
        </>
    );
}

export default CategoryAdd;