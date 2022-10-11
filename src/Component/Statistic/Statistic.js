import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const data = [
        {
            name: 'Js',
            question: 12,
            quiz: 2400,

        },
        {
            name: 'React',
            question: 9,
            quiz: 1398,

        },
        {
            name: 'Css',
            question: 10,
            quiz: 9800,

        },
        {
            name: 'HTML',
            question: 15,
            quiz: 3908,

        },
    ];
    return (
        <div>
            <h1>This is a barchart of my quiz</h1>

            <BarChart width={400} height={500} data={data}>
                <Bar dataKey="question" fill="blue" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>



        </div>
    );
};

export default Statistic;