import React from 'react';
import './Week.css';
import Day from './Day';

const Week = ({ days }) => {
    console.log(days)
    return (
        <div className="life">
            {
                days.map((w, i) => (
                    <div className="Week" />
                ))
            }
        </div>
    );
};

export default Week;