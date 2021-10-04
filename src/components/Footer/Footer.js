import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className="bg-black text-white text-center footer py-5">
            <h1 className="fw-bold">PLAY<span style={{ color: "#ff9b51" }}>CAVE</span> SPORTS ACADEMY</h1>
            <div className="social-icon">
                <ul>
                    <li><Link style={{color:"white"}} to="/"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link style={{color:"white"}} to="/"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link style={{color:"white"}} to="/"><i className="fab fa-google-plus-g"></i></Link></li>
                    <li><Link style={{color:"white"}} to="/"><i className="fab fa-instagram"></i></Link></li>
                </ul>
            </div>
            <div>
                <p className="text-center"><small><i class="far fa-copyright"></i> 2021 PLAYCAVE BD, Inc. All Rights reserved</small></p>
            </div>
        </Container>
    );
};

export default Footer;