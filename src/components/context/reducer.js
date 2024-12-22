import * as actions from '../context/action'




export  const reducer =(state,action)=>{

    switch(action.type){
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return{
                ...state,
                Watchlist:[action.payload,...state.Watchlist]
        
            };
            case actions.REMOV_MOVIE_FROM_WATCHLIST:
                return{
                    ...state,
                    Watchlist:state.Watchlist.filter((movie)=>{return movie.imdbID!==action.payload})
                }
                case actions.MOVE_TO_WATCHLIST:
                    return{
                        ...state,
                        Watched:state.Watchlist.filter((movie)=> movie.imdbId!==action.payload),
                        Watchlist:[action.payload,...state.Watchlist],
                    }
                    case actions.ADD_MOVIE_TO_WATCHED:
                        return{
                            ...state,
                            Watchlist:state.Watchlist.filter((movie)=> movie.imdbId!==action.payload.imdbId),
                            Watched:[action.payload,...state.Watched]
                    
                        };
                        case actions.REMOV_MOVIE_FROM_WATCHED:
                            return{
                                ...state,
                                Watched:state.Watchlist.filter((movie)=> movie.imdbId!==action.payload)
                            }
                            default:
                                return state
    };
   
}