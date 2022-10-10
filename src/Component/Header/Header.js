import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar d-flex justify-content-between p-2 m-2 rounded 3 bg-primary'>
            <div className='text-danger'>
                <h1>Quiz App</h1>
            </div>

            <div className='navLink'>

                <Link to="/">Home</Link>
                <Link to="/topic">Topic</Link>
                <Link to="/statistic">Statistic</Link>
                <Link to="/blog">Blog</Link>

            </div>

        </nav >
    );
};

export default Header;