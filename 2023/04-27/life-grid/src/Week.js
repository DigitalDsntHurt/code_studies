import React from 'react';
// import './Week.css';
import Day from './Day';

const Week = ({days}) => {
    return (
        <div className="Week">
            {days.map((day, i) => {
                return <Day key={i} />
            })}
        </div>
    );
};

export default Week;