import React from 'react';
const Topic = ({ topic }) => {
    const { logo, name } = topic;

    return (
        <div>

            <div className='max-w-sm d-flex m-3 g-5'>
                <div className="card shadow-xl border-2 dark:bg-gray-300">
                    <figure>
                        <img className='w-100 bg-danger' src={logo} alt="" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title">{name}</h2>
                        <div className='card-actions justify-end'>
                            <button className="btn btn-primary">Start quiz</button>
                        </div>

                    </div>
                </div>

            </div>




        </div>
    );
};

export default Topic;