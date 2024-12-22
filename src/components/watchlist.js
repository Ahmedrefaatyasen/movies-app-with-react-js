import React from 'react';
import { Usemoviecontext } from './context/Globalcontext';
import Card from './card';
import './watchlist.css'
import * as actions from './context/action'

const Watchlist = () => {
   const {watchlist}=Usemoviecontext()
   const {moviesDispatch}=Usemoviecontext()


   let arr=watchlist.slice()
  
   
   
    return (
        <div className='watch-list'>
            <div className='container'>
                <div className='main-heading'>
                    <h1 className='movies-heading'>my watch list</h1>
                    <span className='movies-count'> {watchlist.length}<span></span>{watchlist.length===1?"movie":"movies"}</span>
                   
                </div>
                <div style={{display:"flex",alignItems:"center", gap:"10px",flexWrap:"wrap",backgroundColor:"transparent",justifyContent:"center"}}>
            {arr.length>0? arr.map((movie)=>(<div className='cont'><Card key={movie.imdbID} movie={movie} type="watchlist" /> 
            <button onClick={()=>moviesDispatch({type:actions.REMOV_MOVIE_FROM_WATCHLIST,payload:movie.imdbID})}>x</button>
    </div>)):(<div className='head'><h2>no movies in your list add some</h2></div>)}
            </div> 
            
            </div>

           
        </div>
    );
}

export default Watchlist;
