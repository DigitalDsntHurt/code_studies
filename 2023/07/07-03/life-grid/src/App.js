import './App.css';
import Month from './Month';
import life from './dates';

const days = [1,2,3,4,5,6,7,8];
const weeks = [days, days, days, days];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {life.map(month => <Month weeks={month} />)}
        {/* <Month weeks={weeks} /> */}
      </header>
    </div>
  );
}

export default App;
