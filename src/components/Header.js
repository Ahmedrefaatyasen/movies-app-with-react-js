import React from 'react';
import '../components/header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div  className='header'>
            <div className="container">
                <div className="logo">
                    <NavLink to="/">moveis</NavLink>
                </div>
                <ul className="nav-links">
                    <li>
                    <NavLink to="/watchlist">watch list</NavLink>
                    </li>
                    <li>
                        <NavLink to='/watched'>watched</NavLink>
                    </li>
                    <li>
                        <NavLink to="./add" className="btn">add</NavLink>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default Header;
