import React from "react";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";
import HeaderTitle from "./HeaderTitle";
import CategoryForm from "../form/CategoryForm";

function AddCategory() {
    return (
        <Card className="max-w-[75%]">
            <CardHeader>
                <HeaderTitle label={'Ajouter une catégorie'} />
            </CardHeader>
            <CardBody>
            </CardBody>
            <Divider/>
        </Card>
    );
}

export default AddCategory;