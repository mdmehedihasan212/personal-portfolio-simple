import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect sticky='top' className='bg-secondary p-3 text-dark bg-opacity-25'>
                <Navbar.Brand className='fw-bold fs-2' href="#home">Md Mehedi Hasan</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='navbar ms-auto text-uppercase'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href="#aboutus">About Us</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#family">Family</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;