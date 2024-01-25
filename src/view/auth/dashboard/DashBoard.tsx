import React from "react";
import '../../Body/_DashBoard.scss'
import NavBar from "../../../components/core/NavBar";
import CategoryList from "../../../components/core/CategoryList";
import CategoryAdd from "../../../components/core/CategoryAdd";
import ListTodo from "../../../components/dashboard/ListTodo";
import Todo from "../../../components/core/Todo";

function Dashboard() {
    return (
        <div>
            <NavBar></NavBar>

            <div className="flex w-full flex-col main-card-dashboard">
                <div className="flex w-full flex-row justify-center">
                    <CategoryList></CategoryList>
                    <CategoryAdd></CategoryAdd>
                </div>
                <Todo></Todo>
            </div>
        </div>
    );
}

export default Dashboard;