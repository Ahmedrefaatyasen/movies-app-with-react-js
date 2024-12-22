
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Add from './components/add';
import Watchlist from './components/watchlist';
import Watched from './components/watched';
import ContextProvider from './components/context/Globalcontext';
import Movies from './components/movies';




function App() {
  return (
    
    <Router>
    <ContextProvider>
    <Header/>
    <Routes>
      <Route path='/' element={<Movies/>}/>
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/watched' element={< Watched/>}/>
        <Route path='/add' element={<Add/>}/>
    </Routes>
    </ContextProvider>  
    </Router>
    
  
  );
}

export default App;
