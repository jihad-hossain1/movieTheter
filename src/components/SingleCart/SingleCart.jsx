import React from 'react';

const SingleCart = ({handleWatchTime,movie}) => {
    // poster, movieName, description, watchTime, imdbRating, 
    
    // console.log(props);
    return (
        <div>
            <div className="h-full card card-side bg-base-100 shadow-xl border border-neutral ">
                    <figure className="w-full"><img className=" h-full" src={movie.poster} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{movie.movieName}</h2>
                        <p>Discripton: {movie.description}</p>
                        <div className="flex justify-between my-7">
                            <p>Watch: {movie.watchTime} </p>
                            <p>IMDB: {movie.imdbRating} </p>
                        </div>
                        <div className="card-actions justify-end">
                        <button onClick={() => handleWatchTime(movie.watchTime)} className="btn btn-warning btn-outline btn-sm">Book Now</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default SingleCart;