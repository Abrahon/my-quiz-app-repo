import React from 'react';
import './Home.css';
import img from './img.png';


const Home = () => {
    return (
        <div className='d-flex sm-3'>
            <img className='headerImg' src={img} alt="" />

            <div>
                <h2>This is my firs quiz website .I created this site by react router with bootstrap.Here we have question for four different subject React,Javascript,Css, and HTML.</h2>
            </div>
        </div>

    );
};

export default Home;