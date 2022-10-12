import React from 'react';
// import Button from 'react-bootstrap/Button';
import img from './img.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='container banner my-5'>
            <div className="row">
                <div className="col-lg-6 banner-img">
                    <img src={img} alt="" />
                </div>
                <div className="col-lg-6 bg-right ">
                    <h1 className=''>This is my first quiz App.This App very easy to use.</h1>
                    <p className='fs-5 my-4'>We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;