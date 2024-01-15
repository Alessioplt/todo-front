import React from "react";
import '../../Body/_DashBoard.scss'
import NavBar from "../../../components/core/NavBar";
import Categories from "../../../components/core/Categories";

function Dashboard() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex w-full flex-col main-card-dashboard">
                <Categories></Categories>
            </div>
        </div>
    );
}

export default Dashboard;