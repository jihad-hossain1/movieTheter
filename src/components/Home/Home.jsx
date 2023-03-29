import React from 'react';

import { useEffect, useState } from "react";
import SingleCart from '../SingleCart/SingleCart';


const Home = ({ handleWatchTime }) => {
    
    const [movies, setMovies] = useState([]);
    const [control, setControls] = useState(false);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    },[control])
    return (
        
        <> 
            <div className='text-center mb-5'>
                <button onClick={()=>setControls(!control)} className='btn btn-primary btn-xs'>Rander Now</button>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {
                movies.map(movie => <SingleCart handleWatchTime={handleWatchTime} movie={movie}></SingleCart>)
            }
        </div>
        </>
    );
};

export default Home;