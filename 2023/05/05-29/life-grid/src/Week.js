import Day from './Day';

const Week = ({days}) => {
    console.log(days);
    return (
        <div className="Week">
            {days.map(day => (<Day dow={day}/>))}
        </div>
    );
};

export default Week;