import React from 'react';
import './card.css'

const Card = ({movie,type}) => {
    return (
        <div className='grid'>
            <div className='card'>
                {movie.Poster?(<img src={movie.Poster} alt={movie.Title
                }/>): (movie.Title)}
            </div>
        
            
        </div>
    );
}

export default Card;
