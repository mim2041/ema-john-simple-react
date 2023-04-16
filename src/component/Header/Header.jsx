import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(result => {})
        .catch(error => console.log(error))
    }

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
                    {user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogOut}>Log Out</button></span>}
                </div>
            </div>
        </nav>
    );
};

export default Header;