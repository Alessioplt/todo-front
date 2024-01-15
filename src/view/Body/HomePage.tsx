import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Login from "../../components/core/Login";
import './HomePage.scss'
import SignUp from "../../components/core/SignUp";
function HomePage() {
    return (
        <div className="flex w-full flex-col main-card-home" >
            <Card className=" max-w-[400px]">
                <CardBody className="overflow-hidden">
                    <Tabs aria-label="Options" size="md" fullWidth>
                        <Tab key="Login" title="Login">
                            <Login></Login>
                        </Tab>
                        <Tab key="SignUp" title="Sign Up">
                            <SignUp></SignUp>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}

export default HomePage;