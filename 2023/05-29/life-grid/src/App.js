import './App.css';
import lifeDays from './lifeData';
import Week from './Week';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hiii</h1>
        {
          lifeDays.map(week => {
            return <Week days={week} />
          })
        }
      </header>
    </div>
  );
}

export default App;
