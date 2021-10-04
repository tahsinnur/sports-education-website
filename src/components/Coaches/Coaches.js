import React, { useEffect, useState } from 'react';
import CoachesCard from '../CoachesCard/CoachesCard';

const Coaches = () => {
    const [coaches, setCoaches] = useState([]);

    useEffect( () => {
        fetch('/coaches.JSON')
        .then(res => res.json())
        .then(data => setCoaches(data))
    }, [])
    return (
        <div className="container text-center">
            <h2 className="pt-5 pb-2 fw-bold">OUR COACHES</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 pb-3">
            {
                coaches.map(coach => <CoachesCard
                    key={coach._id}
                    coach={coach}
                ></CoachesCard>)
            }
            </div>
        </div>
    );
};

export default Coaches;