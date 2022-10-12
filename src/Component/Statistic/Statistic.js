import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const quizData = useLoaderData()

    return (
        <div className='mt-5'>
            <h1>This is a barchart of my quiz</h1>

            <div>
                <ResponsiveContainer width='92%' height={400}>
                    <BarChart data={quizData.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistic;