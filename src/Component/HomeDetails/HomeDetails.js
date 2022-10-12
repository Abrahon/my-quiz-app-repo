import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const HomeDetails = () => {
    const clickValue = useLoaderData();
    const { value } = clickValue;
    const quiz = value.questions
    return (
        <div>
            <h2>question:{value.length}</h2>
            <h1>quiz of {value.name}</h1>
            {
                Quiz.map(questions => <Quiz key={questions.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default HomeDetails;