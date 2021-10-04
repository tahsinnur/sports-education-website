import React, { useEffect, useState } from 'react';
import ProgramsCard from '../ProgramsCard/ProgramsCard';

const SportsPrograms = () => {
    const [sportsPrograms, setSportsPrograms] = useState([]);

    useEffect(()=>{
        fetch("/sportsPrograms.JSON")
        .then(res => res.json())
        .then(data => setSportsPrograms(data))
    },[])

    return (
        <div className="container text-center">
            <h2 className="pt-5 pb-2">OUR SPORTS PROGRAMS</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 pb-3">
                {
                    sportsPrograms.map(program => <ProgramsCard program={program}></ProgramsCard>)
                }
            </div>
        </div>
    );
};

export default SportsPrograms;