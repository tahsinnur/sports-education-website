import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ProgramsCard from '../ProgramsCard/ProgramsCard';

const HomePrograms = () => {
    const [sportsPrograms, setSportsPrograms] = useState([]);

    useEffect( () => {
        fetch("/sportsPrograms.JSON")
        .then(res => res.json())
        .then(data => setSportsPrograms(data))
    } , [])

    const history = useHistory();
    const handleLoadMoreBtn = () =>{
        history.push("/sportsprograms");
    }

    return (
        <div className="container text-center">
            <h2 className="text-center pt-5 pb-4 fw-bold">OUR FEATURED PROGRAMS</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 pb-3">
            {
                sportsPrograms.slice(0,4).map(program => <ProgramsCard 
                    key={program._id}
                    program={program}
                ></ProgramsCard>)
            }
            </div>
            <div className="text-center pb-3">
                <button onClick={handleLoadMoreBtn} style={{backgroundColor:"#ff9b51"}} className="border-0 px-3 py-2 rounded text-white">Load More</button>
            </div>
        </div>
        
    );
};

export default HomePrograms;