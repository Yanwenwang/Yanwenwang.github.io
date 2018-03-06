import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Shared';

import './Navbar.scss';

export const Navbar = () => {
    return (
        <Container>
        	<nav className="navbar__container">
                <Link className="navbar__logo" to="/">.YW</Link>
                <ul className="navbar__group">
                    <li>
                    	<Link className="navbar__item" to="/">Home</Link>
                    </li>
                    <li>
                    	<Link className="navbar__item" to="/resume">Resume</Link>
                    </li>
                </ul>
             </nav>
         </Container>
    )
};

export default Navbar;