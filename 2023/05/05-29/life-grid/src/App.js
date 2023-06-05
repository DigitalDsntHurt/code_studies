import './App.css';
import { lifeMonths } from './lifeData';
import Month from './Month';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hiii</h1>
        {
          lifeMonths.map(month => {
            return <Month weeks={month} />
          })
        }
      </header>
    </div>
  );
}

export default App;
