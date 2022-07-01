import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/react_pic/">Home</Link></li>
                <li><Link to="/about">about</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;