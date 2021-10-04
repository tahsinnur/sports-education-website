import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container text-center">
            <h2 className="pt-5 pb-2 fw-bold">ABOUT US</h2>
            <p>The Sports School is Bangladesh's First Integrated School for Sports and Academics, providing budding and professional athletes a platform to pursue sporting excellence by providing them with world-class facilities and training by expert coaches and world-renowned mentors for Tennis, Cricket, Badminton, Football and Basketball. <Link style={{textDecoration:"none", color:"#ff9b51", fontWeight:"600"}} to="/sportsprograms">Click Here To Learn More About Our Programs</Link>
            <br />
            <br />
                The Sports School offers a flexible educational curriculum that provides a tailor-made academic schedule to athletes, built around their sporting commitments. We encourage & provide means to our students, from Grade 5 to Post Graduation, to balance their pursuit for sporting excellence without compromising on their academics.
                <br />
                <br />
                The education facilities provided by The Sports School are similar to regular schools but with professional sports facilities. We have a team of professional teachers with great teaching experience. They help the students to go along with the chapters easily. They ensure that students get complete knowledge of lessons if they miss due to their tournament. Our classes are conducted using the latest technologies and facilities.</p>
        </div>
    );
};

export default About;