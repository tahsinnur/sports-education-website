import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="py-3 bg-black" expand="lg">
            <Container>
                <NavLink to="/home" className="fw-bold fs-3 text-white menu-item">SILVER <span style={{color:"#ff9b51"}}>LINING</span></NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 fs-6"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Stack direction="horizontal" gap={4}>
                            <NavLink
                                to="/home"
                                activeStyle={{
                                    fontWeight: "600",
                                    color:"#ff9b51"
                                }}
                                className="menu-item"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/sportsprograms"
                                activeStyle={{
                                    fontWeight: "600",
                                    color:"#ff9b51"
                                }}
                                className="menu-item"
                            >
                                Sports Programs
                            </NavLink>
                            <NavLink
                                to="/coaches"
                                activeStyle={{
                                    fontWeight: "600",
                                    color:"#ff9b51"
                                }}
                                className="menu-item"
                            >
                                Coaches
                            </NavLink>
                            <NavLink
                                to="/about"
                                activeStyle={{
                                    fontWeight: "600",
                                    color:"#ff9b51"
                                }}
                                className="menu-item"
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