import React from 'react';
import { Usemoviecontext } from './context/Globalcontext';
import Card from './card';
import* as actions from './context/action'

const Watched = () => {
    const {watched}=Usemoviecontext()
    const{moviesDispatch}=Usemoviecontext()
    
    return (
        <div>
            <div className='container'>
                <div className='main-heading'>
                    <h1 className='movies-heading'>watched movies</h1>
                    <span className='movies-count'>{watched.length}<span></span>{watched.length===0?" movie":"movies"}</span>
                </div>
                <div style={{display:"flex",alignItems:"center", gap:"10px",flexWrap:"wrap",backgroundColor:"transparent",justifyContent:"center"}}>
                {watched.length>0?watched.map((x)=>(<div className='cont'><Card movie={x} type="watched" key={x.imbID}/>  <button onClick={()=>moviesDispatch({type:actions.REMOV_MOVIE_FROM_WATCHED,payload:x.imdbID})}>x</button></div>)):(<div className='head'><h2>no movies in your list </h2></div>)}
                </div>
            </div>
            
           
        </div>
    );
}

export default Watched;
