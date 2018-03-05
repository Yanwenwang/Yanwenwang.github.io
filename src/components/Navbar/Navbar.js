import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = () => {
    return (
    	<nav className="navbar__container">
            <Link className="navbar__logo" to="/">.YW</Link>
            <ul className="navbar__group">
                <li>
                	<Link className="navbar__item" to="/">Home</Link>
                </li>
                <li>
                	<Link className="navbar__item" to="/about">About</Link>
                </li>
            </ul>
         </nav>
    )
};

export default Navbar;