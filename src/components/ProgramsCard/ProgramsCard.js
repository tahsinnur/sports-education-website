import React from 'react';
import './ProgramsCard.css';

const ProgramsCard = (props) => {
    const {name, img, coach, duration, price} = props.program;
    return (
            <div className="col">
                <div className="card h-100 programs-card">
                    <img style={{height:"300px", padding: "10px"}} src={img} className="card-img-top img-thumbnail" alt="" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{name}</h5>
                        <p className="card-text">Duration: {duration} years</p>
                        <p className="card-text">Coach: {coach}</p>
                        <p className="card-text">Price: ${price}</p>
                    </div>
                    <div className="text-center pb-3">
                        <button style={{backgroundColor:"#ff9b51"}} className="border-0 px-3 py-2 rounded text-white">Enroll Now</button>
                    </div>
                </div>
            </div>
    );
};

export default ProgramsCard;