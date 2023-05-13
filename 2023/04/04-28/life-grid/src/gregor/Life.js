import Week from './Week';

const Life = ({ lifeData }) => {
    return (lifeData.map((week, weekIdx) => <Week days={week} key={weekIdx} />));
};

export default Life;
