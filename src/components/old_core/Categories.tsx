import React, {useEffect, useState} from "react";
import {Chip, Tab, Tabs} from "@nextui-org/react";
import Todo from "./Todo";
import AddCategory from "./AddCategory";
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { updateCategory } from "../../redux/ListTODO";
import {fetchCategories} from "../../redux/CategoryApi";


interface Category {
    id: number;
    title: string;
}

function Categories() {
    const [selectedTab, setSelectedTab] = useState("");

    const category = useAppSelector((state) => state.category)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, []);
    const handleTabChange = (newValue: React.Key) => {
        if (typeof newValue === 'string') {
            setSelectedTab(newValue);
            dispatch(updateCategory(newValue));
        }
    };

    return (
        <Tabs
            key={"bordered"}
            aria-label="Options"
            color="primary"
            variant="bordered"
            onSelectionChange={handleTabChange}
        >
            {category.categories.map((category: Category) => (
                <Tab
                    key={category.id}
                    title={
                        <div className="flex items-center space-x-2">
                            <span>‎ ‎ {category.title}</span>
                        </div>
                    }
                >
                    <Todo />
                </Tab>
            ))}
            <Tab key="add" title="+">
                <AddCategory />
            </Tab>
        </Tabs>
    );
}

export default Categories;
