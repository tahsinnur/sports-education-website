import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="bg-black text-white text-center footer py-5">
            <h1>footer</h1>
            <small><i class="far fa-copyright"></i> copyright 2021</small>
        </Container>
    );
};

export default Footer;