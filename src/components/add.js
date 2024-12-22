import React, { useEffect } from 'react';
import {useState} from 'react'
import './add.css'
import axios from 'axios';
import Reslutcard from './reslutcard';


const Add = () => {
    const [movies,setmpvies]=useState([])
    const [searchvalue,setsearchvalue]=useState("");
    useEffect(()=>{
        axios.get(`http://www.omdbapi.com/?apikey=90574fad&s=${searchvalue}`).then((res)=>{
      if(res.data.Search){
        console.log(res.data)
      setmpvies(res.data.Search)}
     
        }).catch((er)=>{console.log(er)});
        
    },[searchvalue])
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-container">
                        <input type="text" placeholder="search for a movie" value={searchvalue}
                        onChange={(e)=> setsearchvalue(e.target.value)}/>
                    </div>
                    
                        {movies && <ul className="results"> 
                            
                            {movies.map((item)=>
                                ( 
                                    <li key={
                                      item.imdbID
                                        } >{<Reslutcard movie={item}/>}</li>
                                )
                            )}
                             </ul>}

                  
                </div>
            </div>
            
        </div>
    );
}

export default Add;
