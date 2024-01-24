import React from "react";
import '../../Body/_DashBoard.scss'
import NavBar from "../../../components/old_core/NavBar";
import Categories from "../../../components/old_core/Categories";
import CategoryList from "../../../components/core/CategoryList";
import CategoryAdd from "../../../components/core/CategoryAdd";
import ListTodo from "../../../components/dashboard/ListTodo";
import Todo from "../../../components/core/Todo";

function Dashboard() {
    return (
        <div>
            <NavBar></NavBar>

            <div className="flex w-full flex-col main-card-dashboard">
                <CategoryList></CategoryList>
                <CategoryAdd></CategoryAdd>
                <Todo></Todo>
            </div>
        </div>
    );
}

export default Dashboard;