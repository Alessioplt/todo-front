import React, {useEffect, useState} from "react";
import {Chip, Tab, Tabs} from "@nextui-org/react";
import Todo from "./Todo";
import AddCategory from "./AddCategory";
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { updateCategory } from "../../redux/ListTODO";
import {useNavigate} from "react-router";
import {fetchCategories} from "../../api/Categories";


interface Category {
    id: number;
    title: string;
    itemNumber: number;
}

function Categories() {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState("");

    const category = useAppSelector((state) => state.category)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (sessionStorage.getItem('token') === null) {
            console.log("not logged in")
            navigate("/")
        }
        else {
            dispatch(fetchCategories())
        }
    }, []);
    const handleTabChange = (newValue: React.Key) => {
        if (typeof newValue === 'string') {
            setSelectedTab(newValue);
            // Assuming you want to update the category based on the title, you can find the category by title
            console.log(newValue)
            dispatch(updateCategory(Number(newValue)));
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
                            <Chip size="sm" variant="faded">{category.itemNumber}</Chip>
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

