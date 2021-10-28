import React from 'react';
import {Link} from 'react-router-dom';
const Header = () =>{
    return(
        <nav>
            <div className="nav-wrapper">
                <Link to ={'/'} className="brand-logo">Kumaraguru College of Technology</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About us</Link></li>
                <li><Link to={'/shop'}>Courses</Link></li>
                <li><Link to={'/'}>Contact Us</Link></li>
            </ul>
            </div>
        </nav>
    )
};

export default Header;