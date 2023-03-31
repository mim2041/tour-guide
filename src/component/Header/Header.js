import React from 'react';
import './Header.css'
import user from '../images/user.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1>Tour Guide</h1>
            </div>
            <div className='user'>
                <img src={user} alt="" />
            </div>
        </div>
    );
};

export default Header;