import React, { useState } from 'react';
import './reslutcard.css'
import { Usemoviecontext } from './context/Globalcontext';
import * as actions from './context/action'
const Reslutcard = ({movie}) => {
    const moviecontext=Usemoviecontext()
 const [tru,settru]=useState(false)
 const [fal,setfal]=useState(false)
 console.log(tru)
    return (
        <div className='reslut-card'>
            <div className='poster-wraper'>
                {movie.Poster?(<img src={movie.Poster} alt='1'/>):(<div className='filter-poster'></div>)}
            </div>
            <div className='info'>
                <div className='heading'>
                    <h3 className='title'>{movie.Title}</h3>
                    {movie.Year?<h4 className='release-date'>{movie.Year}</h4>:"-"}
                </div>
                <div className='controls'>
                <button disabled={fal} onClick={()=>{ setfal(true);settru(true); moviecontext.moviesDispatch({type:actions.ADD_MOVIE_TO_WATCHED,payload:movie})}} className='btn'>watched</button>
                <button disabled={tru} onClick={()=>{;settru(true); moviecontext.moviesDispatch({type:actions.ADD_MOVIE_TO_WATCHLIST,payload:movie})}} className='btn'>Add to wachlist</button>
            </div>
            </div>
           
            
        </div>
    );
}

export default Reslutcard;
