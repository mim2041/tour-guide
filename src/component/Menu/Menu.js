import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <div className='time'>
                <p>Spent time on read: <span>0</span> min</p>
            </div>
            <div className='titles'>
                <h5>Bookmarked Blogs: </h5>
            </div>
        </div>
    );
};

export default Menu;