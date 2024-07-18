import './App.css';
import User from './class-component/class';
import Fun from './functional-component/function'

function App() {
  return (
    <div className="App">
      <div><h1>Function Component example</h1>
      <Fun name="Deepika"/></div>
     
     <h1>Class Component example</h1>
     <User></User>
    </div>
  );
}

export default App;
