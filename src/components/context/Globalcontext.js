import { createContext, useContext, useReducer } from "react";
import {reducer}  from "./reducer"



const initailState={
Watchlist:[...JSON.parse(localStorage.getItem("movieswatchlist"))],
Watched:[...JSON.parse(localStorage.getItem("movieswatched"))]

}
export const GlobalContext=createContext({})
const ContextProvider= ({children}) => {
    const [state,dispatch]=useReducer(reducer,initailState);
        localStorage.setItem("movieswatchlist",JSON.stringify(state.Watchlist))
    localStorage.setItem("movieswatched",JSON.stringify(state.Watched))

    return(
         <GlobalContext.Provider value={{watchlist:state.Watchlist,watched:state.Watched,moviesDispatch:dispatch}}>
            {children}
           </GlobalContext.Provider>
    )   
}
export default ContextProvider;
export const Usemoviecontext=()=>{
    return useContext(GlobalContext)
    
}
