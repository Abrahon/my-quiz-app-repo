import React from 'react';
import { Link } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css';


const Header = () => {

    return (
        <nav className='navbar col lg-auto md-3 d-flex justify-content-between p-2 m-2 rounded 3 bg-primary'>
            <div className='text-danger'>
                <h1>Quiz App</h1>
            </div>

            <div className='navLink'>

                <Link to="/">Home</Link>
                <Link to="/statistic">Statistic</Link>
                <Link to="/blog">Blog</Link>


                {/* <div onClick={() => setOpen(open)} className="h-6 w-6 md-hidden">
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    }

                </div> */}




            </div>

        </nav >
    );
};

export default Header;