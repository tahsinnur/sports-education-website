import React from 'react';
import './CoachesCard.css';

const CoachesCard = (props) => {
    const {name, role, age, email, img} = props.coach;
    return (
        <div className="col">
                <div className="card h-100 coach-card">
                    <img style={{height:"300px", padding: "10px"}} src={img} className="card-img-top img-thumbnail" alt="" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{name}</h5>
                        <p className="card-text">Role: {role}</p>
                        <p className="card-text">Age: {age}</p>
                        <p className="card-text">Email: {email}</p>
                    </div>
                </div>
            </div>
    );
};

export default CoachesCard;