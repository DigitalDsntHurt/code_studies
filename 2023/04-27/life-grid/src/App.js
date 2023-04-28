import './App.css';
import Week from './Week';
import dummyLifeData from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Week days={dummyLifeData} />
      </header>
    </div>
  );
}

export default App;
