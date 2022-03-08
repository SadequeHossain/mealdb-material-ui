import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">

            <nav >
                <Link className="nav" to="/home">Home</Link>
                <Link className="nav" to="/about">About</Link>
                <Link className="nav" to="/restaurant">My Retaurant</Link>

            </nav>

        </div>
    );
};

export default Header;