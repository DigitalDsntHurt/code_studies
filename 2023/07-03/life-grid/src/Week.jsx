import Day from './Day';

const Week = ({ days }) => {
    return (
        <div className='Week'>
            {days.map(day => <Day />)}
        </div>
    );
};

export default Week;
