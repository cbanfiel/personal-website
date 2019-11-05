import React from 'react';
import '../App.scss';
import './Navbar.scss'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
        <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">About</Link></li>      
    <li><Link to="/">Contact</Link></li>  
    <li><Link to="/onpapersports">On Paper Sports</Link></li> 



        </ul>
</div>
  );
}

export default Navbar;
