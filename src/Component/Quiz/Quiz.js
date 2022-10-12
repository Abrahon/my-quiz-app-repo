import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Question from '../Question/Question';

const Quiz = () => {
    const quizData = useLoaderData()
    const [rightAns, setRightAns] = useState([])
    //console.log()
    const right = () => toast.success("Your answer is correct 😊", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const wrong = () => toast.error("Your answer is wrong 😞", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    const handleAns = (option, correctAns) => {
        if (option === correctAns) {
            right()
            if (!(rightAns.includes(correctAns))) {
                let rightAnsArr = [...rightAns, correctAns]
                setRightAns(rightAnsArr)
            }
        }
        else {
            wrong()
        }
    }
    return (
        <div>
            <h2>this quiz:{quizData.data}</h2>

        </div>
    );
};

export default Quiz;