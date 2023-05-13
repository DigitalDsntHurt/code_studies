import Day from './Day';
import './Week.css';

const Week = ({ days }) => {
    return (
            <div className="Week">
                {days.map((day, dayIdx) => <Day day={day} key={dayIdx} />)}
            </div>
        );
};

export default Week;