import React, { useState } from 'react';

const Question = ({ question, handleAns }) => {
    const [isActive, setIsActive] = useState(true)
    const handleAnsView = event => {
        setIsActive(current => !current);
    };

    return (
        <div>

        </div>
    );
};

export default Question;