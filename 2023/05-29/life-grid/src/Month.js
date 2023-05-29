import Week from './Week';

const Month = ({weeks}) => {
    return (
        <div className="Month">
            {weeks.map(week => <Week days={week} />)}
        </div>
    )
};

export default Month;