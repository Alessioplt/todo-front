import React from "react";
import {Card, CardBody, Input, Button} from "@nextui-org/react";

function SignUp() {
    return (
        <Card className="max-w-[400px]">
            <CardBody>
                <form action="" method="get">
                    <div className="w-full flex flex-col gap-4">
                        <Input type="text" label="Name" placeholder="Enter your name" isRequired />
                        <Input type="email" label="Email" placeholder="Enter your email" isRequired />
                        <Input type="password" label="Password" placeholder="Enter your passsword" isRequired />
                        <Input type="password" label="Password confirmation" isRequired />
                        <Button type="submit" color="primary">Sign Up</Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}

export default SignUp;