import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ProgramsCard from '../ProgramsCard/ProgramsCard';

const HomePrograms = () => {
    const [sportsPrograms, setSportsPrograms] = useState([]);

    useEffect( () => {
        fetch("/sportsProgramShort.JSON")
        .then(res => res.json())
        .then(data => setSportsPrograms(data))
    } , [])

    let history = useHistory();
    const handleLoadMoreBtn = () =>{
        history.push("/sportsprograms");
    }

    return (
        <div className="container">
            <h2 className="text-center pt-5 pb-2">Featured Programs</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 pb-3">
            {
                sportsPrograms.map(program => <ProgramsCard program={program}></ProgramsCard>)
            }
            </div>
            <div className="text-center pb-3">
                <button onClick={handleLoadMoreBtn} style={{backgroundColor:"#ff9b51"}} className="border-0 px-3 py-2 rounded text-white">Load More</button>
            </div>
        </div>
        
    );
};

export default HomePrograms;