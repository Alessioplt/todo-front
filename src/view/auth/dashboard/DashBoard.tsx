import React from "react";
import '../../Body/_DashBoard.scss'
import NavBar from "../../../components/core/NavBar";
import CategoryList from "../../../components/core/CategoryList";
import CategoryAdd from "../../../components/core/CategoryAdd";
import Todo from "../../../components/core/Todo";
import CategoryDelete from "../../../components/core/CategoryDelete";

function Dashboard() {
    return (
        <div>
            <NavBar></NavBar>

            <div className="flex w-full flex-col main-card-dashboard">
                <div className="flex w-full flex-row justify-center">
                    <CategoryList></CategoryList>
                    <CategoryAdd></CategoryAdd>
                    <CategoryDelete></CategoryDelete>
                </div>
                <Todo></Todo>
            </div>
        </div>
    );
}

export default Dashboard;