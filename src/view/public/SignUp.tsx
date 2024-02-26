import React, { useState } from "react";
import {Card, CardBody, Input, Button} from "@nextui-org/react";
import {signup} from "../../api/Auth";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (password !== passwordConfirmation) {
            setErrorMessage("Passwords do not match");
            return;
        }
        try {
            await signupUser(name, email, password);
        } catch (err) {
            setErrorMessage("Error signing up "+ err);
        }
    };

    const signupUser = async (name: string, email: string, password: string) => {
        const response = await signup(email, password, name)
        const {data} = response;

        if (data && data.errors && data.errors.length > 0) {
            setErrorMessage(data.errors[0].message);
            return;
        }
        setErrorMessage("Account created successfully, you can now login");
    };

    return (
        <Card className="max-w-[400px]">
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col gap-4">
                        <Input type="text" label="Name" placeholder="Enter your name" isRequired value={name} onChange={(e) => setName(e.target.value)} />
                        <Input type="email" label="Email" placeholder="Enter your email" isRequired value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" label="Password" placeholder="Enter your password" isRequired value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Input type="password" label="Password confirmation" placeholder="Confirm your password" isRequired value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                        {errorMessage && <p>{errorMessage}</p>}
                        <Button type="submit" color="primary">Sign Up</Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}

export default SignUp;