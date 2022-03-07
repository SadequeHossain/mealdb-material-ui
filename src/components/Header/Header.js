import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="header">
            <Link className="nav" to="/about">About</Link>
            <Link className="nav" to="/restaurant">My Retaurant</Link>
            <Link className="nav" to="/home">Home</Link>
        </nav>
    );
};

export default Header;