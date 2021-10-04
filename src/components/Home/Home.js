import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import HomePrograms from '../HomePrograms/HomePrograms';
import './Home.css';
import img1 from '../../images/banner.jpg';
import img2 from '../../images/sliderImg1.jpg';
import img3 from '../../images/sliderImg2.jpg';
import img4 from '../../images/sliderImg3.jpg';

const Home = () => {
    return (
        <div>
            <Container fluid className="banner p-0">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height:"700px"}}
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="fw-bold">PLAY<span style={{color:"#ff9b51"}}>CAVE</span> SPORTS ACADEMY</h1>
                            <p className="fs-4">Pursue your Sporting Dreams without Compromising on Academics, with our Team of World-Class Sports Mentors and Coaches and a Flexible Academic Curriculum</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height:"700px"}}
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1 className="fw-bold" style={{color:"#ff9b51"}}>Train. Learn. Develop</h1>
                            <p className="fs-4">Training by expert coaches and world-renowned mentors, along with tailor-made academic schedule for athletes, built around their sporting commitments.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height:"700px"}}
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className="fw-bold" style={{color:"#ff9b51"}}>Train with the Best Mentors & Coaches</h1>
                            <p className="fs-4">Our team consists of some of the most prominent names in the Indian Sports Industry to provide our students the opportunity to train at their maximum potential</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height:"700px"}}
                            src={img4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className="fw-bold" style={{color:"#ff9b51"}}>International Level Sports & Academic Infrastructure</h1>
                            <p className="fs-4">25 acres of state-of-the-art infrastructure for both sports and academics, designed to optimize and support the development of young sportspeople</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <HomePrograms></HomePrograms>
        </div>
    );
};

export default Home;