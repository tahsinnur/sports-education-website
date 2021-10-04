import React from 'react';

const CoachesCard = (props) => {
    const {name, role, age, email, img} = props.coach;
    return (
        <div className="col">
                <div className="card h-100">
                    <img style={{height:"300px", padding: "20px"}} src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Role: {role}</p>
                        <p className="card-text">Age: {age}</p>
                        <p className="card-text">Email: {email} years</p>
                    </div>
                </div>
            </div>
    );
};

export default CoachesCard;