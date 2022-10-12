import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import img from './img.png'
import './Home.css';

const Home = () => {
    const quizTopic = useLoaderData();
    const home = quizTopic.data
    console.log(home);
    return (
        <div>
            <div className='d-flex sm-3 m-3'>
                <img className='headerImg' src={img} alt="" />
                <div>
                    <h2>This is my firs quiz website .I created this site by react router with bootstrap.Here we have question for four different subject React,Javascript,Css, and Git</h2>
                </div>


            </div>
            <div className='d-flex'>
                <h4>quiz Topic:{home.length}</h4>
                {
                    home.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>

        </div >



    );
};

export default Home;