import React, { useState } from "react";
import {Card, CardBody, CardFooter, Divider, Link, Input, Button} from "@nextui-org/react";
import {useNavigate} from "react-router";
import axiosInstance, {updateAxiosInstance} from "../../api/Service";
import {login, LOGIN} from "../../api/Auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            await loginUser(email, password);
            navigate("/dashboard")
        } catch (err) {
            console.log("wrong user or password");
        }
    };

    const loginUser = async (email: string, password: string) => {
        const {data} = await login(email, password)
        sessionStorage.setItem('token', data.data.login.access_token);
        sessionStorage.setItem('userId', data.data.login.user.id);
        updateAxiosInstance(true);
    };



    return (
        <Card className="max-w-[400px]">
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col gap-4">
                        <Input type="email" label="Email" placeholder="Enter your email" isRequired value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" label="Password" placeholder="Enter your password" isRequired value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button type="submit" color="primary">Login</Button>
                    </div>
                </form>
            </CardBody>
            <Divider/>
            <CardFooter>
                <Link
                    href="">
                    Forgot your password
                </Link>
            </CardFooter>
        </Card>
    );
}

export default Login;
