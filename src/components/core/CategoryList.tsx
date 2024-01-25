import React, {useEffect} from "react";
import {Tab, Tabs} from "@nextui-org/react";
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { updateCategory } from "../../redux/ListTODO";
import {fetchCategories} from "../../redux/CategoryApi";
import {fetchTODOByCategoryID} from "../../redux/TodoApi";


interface Category {
    id: number;
    title: string;
}

function CategoryList() {
    const category = useAppSelector((state) => state.category)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, []);
    const handleTabChange = (newValue: React.Key) => {
        if (typeof newValue === 'string') {
            dispatch(updateCategory(newValue));
            dispatch(fetchTODOByCategoryID(newValue))
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
                </Tab>
            ))}
        </Tabs>
    );
}

export default CategoryList;

