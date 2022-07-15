import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div  >

                <Link to='/Home'>Home</Link>
                <Link to='/Review'>Review</Link>
                <Link to='/Dashboard'>Dashboard</Link>
                <Link to='/Blogs'>Blogs</Link>
                <Link to='/About'>About</Link>

            </div>
        </nav>
    );
};

export default Header;