import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const data = [
        {
            name: 'Js',
            question: 12,
            quiz: 2400,
            amt: 2400,
        },
        {
            name: 'React',
            question: 10,
            quiz: 1398,
            amt: 2210,
        },
        {
            name: 'Cass',
            question: 9,
            quiz: 9800,
            amt: 2290,
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

            <BarChart width={300} height={400} data={data}>
                <Bar dataKey="question" fill="blue" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>



        </div>
    );
};

export default Statistic;