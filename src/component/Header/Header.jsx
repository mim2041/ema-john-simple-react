import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/">shop</Link>
                    <Link to="/orders">orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login">login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;