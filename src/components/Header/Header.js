import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">GGWP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Stack direction="horizontal" gap={3}>
                            <NavLink
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                            >
                                About
                            </NavLink>
                        </Stack>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;