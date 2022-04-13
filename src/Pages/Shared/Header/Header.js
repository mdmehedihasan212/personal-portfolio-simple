import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light">
                <Container>
                    <Navbar.Brand to="#home">Md Mehedi Hasan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className='me-5 text-decoration-none' to="/">Home</CustomLink>
                            <CustomLink className='me-5 text-decoration-none' to="/about">About</CustomLink>
                            <CustomLink className='me-5 text-decoration-none' to="/services">Services</CustomLink>
                            <CustomLink className='me-5 text-decoration-none' to="/experience">Experience</CustomLink>
                            <CustomLink className='me-5 text-decoration-none' to="/blog">Blog</CustomLink>
                            <CustomLink className='me-5 text-decoration-none' to="/contact">Contact</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;