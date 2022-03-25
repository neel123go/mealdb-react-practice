import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='menu'>
            <h2>Foodpanda</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;