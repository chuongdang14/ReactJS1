import logo from './logo.svg';
import './App.scss';
import Mycomponent from './examples/myComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js (Hoi Dan IT)
        </p>
        <Mycomponent />
      </header>
    </div>
  );
}

export default App;
