import './App.css';
// import Day from './Day';
import Week from './Week';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          a lf
        </p>
        <Week days={[1, 2, 3, 4, 5, 6, 7]} />
        {/* <Day /> */}
      </header>
    </div>
  );
}

export default App;
