import React from "react";
import {Navbar, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
function NavBar() {
    const handleSubmit = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');

    };
    return (
        <Navbar maxWidth="full">
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/public">Logout</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/" variant="flat" onClick={handleSubmit}>
                        Log out
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavBar;