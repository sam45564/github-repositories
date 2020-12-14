import { render } from '@testing-library/react';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="https://github.com/sam45564" rel="noreferrer" target="_blank">
                <span className="navbar-brand mb-0 h1">My Github repositories</span>
            </a>
        </nav>
    )
}

export default Navbar;
