import './App.css';
import Life from './gregor/Life';
import { lifeData } from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Life lifeData={lifeData}/>
      </header>
    </div>
  );
}

export default App;
