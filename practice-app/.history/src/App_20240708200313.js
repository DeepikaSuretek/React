import './App.css';
import User from './class-component/class';
import Fun from './functional-component/function'

function App() {
  return (
    <div className="App" style={{display: "inline-flex",
      width: "100%"}}>
      <div style={{width:"50%",border: "2px solid","padding-bottom": "50px"}}>
        <h1 style={{"background-color": "skyblue","padding": "16px","border": "2px solid"}}>Function Component example</h1>
        <Fun name="Deepika" />
      </div>
      <div style={{width:"50%",border: "2px solid","padding-bottom": "50px"}}>
        <h1 style={{"background-color": "skyblue","padding": "16px","border": "2px solid"}}>Class Component example</h1>
        <User name="Deepika"></User>
        </div>

    </div>
  );
}

export default App;
